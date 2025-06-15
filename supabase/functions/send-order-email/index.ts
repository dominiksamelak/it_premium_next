import { serve } from "https://deno.land/std@0.192.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-auth, x-supabase-client, x-supabase-anon-key",
  "Access-Control-Allow-Methods": "POST, OPTIONS, GET",
  "Access-Control-Max-Age": "86400",
};

// Replace this with your actual Supabase anon key
const STATIC_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2dHZkZHhseHdtcmVxdHZtc3F2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4MTAwNTEsImV4cCI6MjA2NTM4NjA1MX0.dXsfAQl3935mdYgShZe30DXfm64hGxwrsfHsMMsjyho";

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("OK", { headers: corsHeaders });
  }

  // Log request headers for debugging
  console.log("Request headers:", Object.fromEntries(req.headers.entries()));

  // Check auth header
  const authHeader = req.headers.get("Authorization");
  if (!authHeader || authHeader !== `Bearer ${STATIC_TOKEN}`) {
    console.error("Invalid or missing authorization header");
    return new Response(JSON.stringify({
      error: "Invalid or missing authorization header"
    }), {
      status: 401,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  // Validate content-type
  const contentType = req.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    return new Response(JSON.stringify({ error: "Invalid content-type" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  // Parse JSON
  let json;
  try {
    json = await req.json();
  } catch (err) {
    console.error("JSON parse error:", err);
    return new Response(JSON.stringify({ error: "Malformed JSON" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const { orderData } = json;

  if (!orderData || !orderData.email || !orderData.order_number) {
    return new Response(JSON.stringify({ error: "Missing orderData fields" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  // Validate email format
  if (!orderData.email.includes('@')) {
    return new Response(JSON.stringify({ error: "Invalid email" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  // Load Mailjet API credentials
  const MAILJET_API_KEY = Deno.env.get("MAILJET_API_KEY");
  const MAILJET_API_SECRET = Deno.env.get("MAILJET_API_SECRET");

  if (!MAILJET_API_KEY || !MAILJET_API_SECRET) {
    console.error("Missing Mailjet API credentials");
    return new Response(JSON.stringify({ error: "Server misconfiguration" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  // Build email payload
  const emailPayload = {
    Messages: [
      {
        From: {
          Email: "dominiksamelak@gmail.com",
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
        TextPart: `Dziękujemy za zgłoszenie!\n\n${JSON.stringify(orderData, null, 2)}`
      }
    ]
  };

  // Send email
  const mailjetResponse = await fetch("https://api.mailjet.com/v3.1/send", {
    method: "POST",
    headers: {
      "Authorization": "Basic " + btoa(`${MAILJET_API_KEY}:${MAILJET_API_SECRET}`),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emailPayload),
  });

  const responseData = await mailjetResponse.json();

  if (!mailjetResponse.ok) {
    console.error("Mailjet error:", responseData);
    return new Response(JSON.stringify({ error: "Email sending failed", details: responseData }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  // All good!
  return new Response(JSON.stringify({ message: "Email sent successfully!" }), {
    status: 200,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
});
