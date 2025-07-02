import { serve } from "https://deno.land/std@0.192.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, content-type, apikey, x-client-info",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Max-Age": "86400",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("OK", { headers: corsHeaders });
  }

  // Only check for presence of Authorization header
  const authHeader = req.headers.get("Authorization");
  if (!authHeader) {
    return new Response(
      JSON.stringify({ error: "Missing Authorization header" }),
      { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  // Validate content-type
  const contentType = req.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    return new Response(
      JSON.stringify({ error: "Invalid content-type" }),
      { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  // Parse JSON body
  let json;
  try {
    json = await req.json();
  } catch {
    return new Response(
      JSON.stringify({ error: "Malformed JSON" }),
      { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  const { orderData } = json;
  if (!orderData || !orderData.email || !orderData.order_number) {
    return new Response(
      JSON.stringify({ error: "Missing orderData fields" }),
      { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  if (!orderData.email.includes("@")) {
    return new Response(
      JSON.stringify({ error: "Invalid email" }),
      { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  // Load Mailjet API credentials
  const MAILJET_API_KEY = Deno.env.get("MAILJET_API_KEY");
  const MAILJET_API_SECRET = Deno.env.get("MAILJET_API_SECRET");

  if (!MAILJET_API_KEY || !MAILJET_API_SECRET) {
    return new Response(
      JSON.stringify({ error: "Server misconfiguration" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  // Format email body
  const {
    order_number,
    name,
    email,
    phone,
    street,
    zipcode,
    city,
    equipment,
    manufacturer,
    model,
    serialnumber,
    details
  } = orderData;

  const formattedText = `Dziękujemy za zgłoszenie!

Numer zlecenia: ${order_number}
Imię i nazwisko: ${name || ""}
Email: ${email}
Telefon: ${phone || ""}
Ulica: ${street || ""}
Kod pocztowy: ${zipcode || ""}
Miasto: ${city || ""}
Typ sprzętu: ${equipment || ""}
Producent: ${manufacturer || ""}
Model: ${model || ""}
Numer seryjny: ${serialnumber || ""}
Opis usterki:
${details || ""}

Po zapoznaniu się ze zgłoszeniem skontaktujemy się z Państwem.

Zespół IT-Premium`;

  // Build email payload
  const emailPayload = {
    Messages: [
      {
        From: {
          Email: "d.samelak@it-premium.pl",
          Name: "IT-Premium"
        },
        To: [
          {
            Email: orderData.email,
            Name: orderData.name || ""
          },
          {
            Email: "dominiksamelak@gmail.com",
            Name: "IT-Premium"
          }
        ],
        Subject: `Nowe zgłoszenie: ${orderData.order_number}`,
        TextPart: formattedText,
        HTMLPart: formattedText.replace(/\n/g, "<br>")
      }
    ]
  };

  // Send email via Mailjet API
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
    return new Response(
      JSON.stringify({ error: "Email sending failed", details: responseData }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  return new Response(
    JSON.stringify({ message: "Email sent successfully!" }),
    { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
  );
});