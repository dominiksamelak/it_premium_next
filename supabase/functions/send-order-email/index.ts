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

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY in env");
      return new Response(JSON.stringify({ error: "Server misconfiguration" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const emailPayload = {
      from: "d.samelak@it-premium.pl",
      to: [orderData.email, "domcio145@wp.pl"],
      subject: `Nowe zgłoszenie: ${orderData.order_number}`,
      text: `Dziękujemy za zgłoszenie!\n\n${JSON.stringify(orderData, null, 2)}`,
    };

    console.log("Sending email with payload:", emailPayload);

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailPayload),
    });

    const responseData = await response.text();
    console.log("Resend API response:", response.status, responseData);

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
