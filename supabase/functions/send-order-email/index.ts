import { serve } from "https://deno.land/std@0.192.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*", // or your domain, e.g. "https://yourdomain.com"
  "Access-Control-Allow-Headers": "Content-Type, Authorization, apikey",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

serve(async (req) => {
  // Handle preflight request (OPTIONS)
  if (req.method === "OPTIONS") {
    return new Response("OK", { headers: corsHeaders });
  }

  try {
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return new Response("Invalid content-type", {
        status: 400,
        headers: corsHeaders,
      });
    }

    const json = await req.json().catch(() => null);
    if (!json || !json.orderData) {
      console.error("Missing or invalid request body");
      return new Response("Missing orderData in request body", {
        status: 400,
        headers: corsHeaders,
      });
    }

    const { orderData } = json;

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY in env");
      return new Response("Server misconfiguration", {
        status: 500,
        headers: corsHeaders,
      });
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "d.samelak@it-premium.pl",
        to: [orderData.email, "domcio145@wp.pl"],
        subject: `Nowe zgłoszenie: ${orderData.order_number}`,
        text: `Dziękujemy za zgłoszenie!\n\n${JSON.stringify(orderData, null, 2)}`,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Email sending failed:", error);
      return new Response("Email sending failed", {
        status: 500,
        headers: corsHeaders,
      });
    }

    return new Response("Email sent successfully!", {
      status: 200,
      headers: corsHeaders,
    });
  } catch (err) {
    console.error("Error processing request:", err);
    return new Response("Internal Server Error", {
      status: 500,
      headers: corsHeaders,
    });
  }
});

