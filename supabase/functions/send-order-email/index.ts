// supabase/functions/send-order-email/index.ts
import { serve } from "https://deno.land/std@0.192.0/http/server.ts";

serve(async (req) => {
  try {
    const bodyText = await req.text();

    if (!bodyText) {
      console.error("No request body received.");
      return new Response("Bad Request: No body provided", { status: 400 });
    }

    let parsedBody;
    try {
      parsedBody = JSON.parse(bodyText);
    } catch (jsonError) {
      console.error("Invalid JSON received:", bodyText);
      return new Response("Bad Request: Invalid JSON", { status: 400 });
    }

    const orderData = parsedBody?.orderData;

    if (!orderData || !orderData.email || !orderData.order_number) {
      console.error("Missing required order data:", orderData);
      return new Response("Bad Request: Missing order data", { status: 400 });
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return new Response("Server Error: Email service not configured", { status: 500 });
    }

    const emailResponse = await fetch("https://api.resend.com/emails", {
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

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      console.error("Email sending failed:", errorText);
      return new Response("Email sending failed", { status: 500 });
    }

    return new Response("Email sent successfully!", { status: 200 });
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
});
