import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import nodemailer from "npm:nodemailer@6.9.0";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS"
      }
    });
  }

  const { orderData } = await req.json();

  // Validate required fields
  if (!orderData || !orderData.email || !orderData.order_number) {
    return new Response(JSON.stringify({ error: "Missing required order data." }), {
      headers: { "Content-Type": "application/json" },
      status: 400
    });
  }

  const transporter = nodemailer.createTransport({
    host: Deno.env.get("SMTP_HOSTNAME"),
    port: Number(Deno.env.get("SMTP_PORT")),
    secure: true,
    auth: {
      user: Deno.env.get("SMTP_USERNAME"),
      pass: Deno.env.get("SMTP_PASSWORD")
    }
  });

  const mailOptions = {
    from: `"IT-Premium" <${Deno.env.get("SMTP_USERNAME")}>`,
    to: orderData.email,
    subject: `Potwierdzenie zgłoszenia ${orderData.order_number}`,
    text: `
      Numer zgłoszenia: ${orderData.order_number}
      Imię i nazwisko: ${orderData.name}
      E-mail: ${orderData.email}
      Telefon: ${orderData.phone}
      Adres: ${orderData.street}, ${orderData.zipcode} ${orderData.city}
      Sprzęt: ${orderData.equipment}
      Producent: ${orderData.manufacturer}
      Model: ${orderData.model}
      Numer seryjny: ${orderData.serialnumber || "—"}
      Opis usterki:
      ${orderData.details}
    `.trim(),
    html: `
      <p><strong>Numer zgłoszenia:</strong> ${orderData.order_number}</p>
      <ul>
        <li><strong>Imię i nazwisko:</strong> ${orderData.name}</li>
        <li><strong>E-mail:</strong> ${orderData.email}</li>
        <li><strong>Telefon:</strong> ${orderData.phone}</li>
        <li><strong>Adres:</strong> ${orderData.street}, ${orderData.zipcode} ${orderData.city}</li>
        <li><strong>Sprzęt:</strong> ${orderData.equipment}</li>
        <li><strong>Producent:</strong> ${orderData.manufacturer}</li>
        <li><strong>Model:</strong> ${orderData.model}</li>
        <li><strong>Numer seryjny:</strong> ${orderData.serialnumber || "—"}</li>
        <li><strong>Opis usterki:</strong><br/>${orderData.details.replace(/\n/g, "<br/>")}</li>
      </ul>
    `.trim()
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: "Email sent successfully!" }), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      status: 200
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email." }), {
      headers: {
        "Content-Type": "application/json"
      },
      status: 500
    });
  }
});