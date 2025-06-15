import { serve } from "https://deno.land/std@0.192.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-auth, x-supabase-client, x-supabase-anon-key",
  "Access-Control-Allow-Methods": "POST, OPTIONS, GET",
  "Access-Control-Max-Age": "86400",
};

serve(async (req) => {
  // Handle preflight request (OPTIONS)
  if (req.method === "OPTIONS") {
    return new Response("OK", { headers: corsHeaders });
  }

  // Check for authorization header
  const authHeader = req.headers.get("Authorization");
  if (!authHeader) {
    console.error("Missing authorization header");
    return new Response(JSON.stringify({ error: "Missing authorization header" }), {
      status: 401,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      console.error("Invalid content type:", contentType);
      return new Response(JSON.stringify({ error: "Invalid content-type" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const json = await req.json().catch((err) => {
      console.error("JSON parse error:", err);
      return null;
    });

    if (!json || !json.orderData) {
      console.error("Missing or invalid request body:", json);
      return new Response(JSON.stringify({ error: "Missing orderData in request body" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { orderData } = json;
    console.log("Received order data:", orderData);

    const MAILJET_API_KEY = Deno.env.get("MAILJET_API_KEY");
    const MAILJET_API_SECRET = Deno.env.get("MAILJET_API_SECRET");

    if (!MAILJET_API_KEY || !MAILJET_API_SECRET) {
      console.error("Missing Mailjet API credentials");
      return new Response(JSON.stringify({ error: "Server misconfiguration" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Verify the email addresses
    if (!orderData.email || !orderData.email.includes('@')) {
      console.error("Invalid recipient email:", orderData.email);
      return new Response(JSON.stringify({ error: "Invalid recipient email" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const emailPayload = {
      Messages: [
        {
          From: {
            Email: "d.samelak@it-premium.pl",
            Name: "IT Premium"
          },
          To: [
            {
              Email: orderData.email,
              Name: orderData.name || ""
            },
            {
              Email: "domcio145@wp.pl",
              Name: "IT Premium"
            }
          ],
          Subject: `Nowe zgłoszenie: ${orderData.order_number}`,
          TextPart: `Dziękujemy za zgłoszenie!\n\n${JSON.stringify(orderData, null, 2)}`,
        }
      ]
    };

    console.log("Sending email with payload:", emailPayload);

    const response = await fetch("https://api.mailjet.com/v3.1/send", {
      method: "POST",
      headers: {
        "Authorization": "Basic " + btoa(`${MAILJET_API_KEY}:${MAILJET_API_SECRET}`),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailPayload),
    });

    const responseData = await response.json();
    console.log("Mailjet API response:", response.status, responseData);

    if (!response.ok) {
      console.error("Email sending failed:", responseData);
      return new Response(JSON.stringify({ error: "Email sending failed", details: responseData }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ message: "Email sent successfully!" }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error processing request:", err);
    return new Response(JSON.stringify({ error: "Internal Server Error", details: err.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
