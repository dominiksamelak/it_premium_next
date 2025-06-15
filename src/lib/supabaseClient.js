// supabase/functions/send-order-email/index.ts
import { serve } from "https://deno.land/std@0.192.0/http/server.ts";

serve(async (req) => {
  try {
    const { orderData } = await req.json();
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "d.samelak@it-premium.pl", // or a Resend domain if verified
        to: [orderData.email, "domcio145@wp.pl"],
        subject: `Nowe zgłoszenie: ${orderData.order_number}`,
        text: `Dziękujemy za zgłoszenie!\n\n${JSON.stringify(orderData, null, 2)}`,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Email sending failed:", error);
      return new Response("Email sending failed", { status: 500 });
    }

    return new Response("Email sent successfully!", { status: 200 });
  } catch (err) {
    console.error("Error processing request:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
});
