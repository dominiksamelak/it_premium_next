const express = require("express");
const cors = require("cors");
const pool = require("./db");
const sendEmail = require("./mailer");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// POST /submitOrder - save order and send email
app.post("/submitOrder", async (req, res) => {
  try {
    const formData = req.body;

    // Calculate start and end of current month
    const currentDate = new Date();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    const startDate = `${year}-${month.toString().padStart(2, "0")}-01`;
    const endMonth = month === 12 ? 1 : month + 1;
    const endYear = month === 12 ? year + 1 : year;
    const endDate = `${endYear}-${endMonth.toString().padStart(2, "0")}-01`;

    // Count orders created this month
    const [rows] = await pool.query(
      `SELECT COUNT(*) AS count FROM orders WHERE created_at >= ? AND created_at < ?`,
      [startDate, endDate]
    );

    const count = rows[0].count;
    const orderNumber = `${count + 1}/${month}/${year}`;

    // Insert new order
    await pool.query(
      `INSERT INTO orders (
        order_number, name, email, phone, street, zipcode, city, equipment,
        manufacturer, model, serialnumber, details, created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())`,
      [
        orderNumber,
        formData.name,
        formData.email,
        formData.phone,
        formData.street,
        formData.zipcode,
        formData.city,
        formData.equipment,
        formData.manufacturer,
        formData.model,
        formData.serialnumber,
        formData.details,
      ]
    );

    // Compose email content
    const emailMessage = `
      <strong>Numer zlecenia:</strong> ${orderNumber}<br>
      <strong>Imię i nazwisko:</strong> ${formData.name}<br>
      <strong>Email:</strong> ${formData.email}<br>
      <strong>Telefon:</strong> ${formData.phone}<br>
      <strong>Ulica:</strong> ${formData.street}<br>
      <strong>Kod pocztowy:</strong> ${formData.zipcode}<br>
      <strong>Miasto:</strong> ${formData.city}<br>
      <strong>Typ sprzętu:</strong> ${formData.equipment}<br>
      <strong>Producent:</strong> ${formData.manufacturer}<br>
      <strong>Model:</strong> ${formData.model}<br>
      <strong>Numer seryjny:</strong> ${formData.serialnumber}<br>
      <strong>Opis usterki:</strong><br>${formData.details}
    `;

    // Send notification email
    await sendEmail({
      subject: `Zgłoszenie serwisowe: ${orderNumber}`,
      message: emailMessage,
    });

    // Return order number to client
    res.json({ orderNumber });
  } catch (err) {
    console.error("Error in submitOrder:", err);
    res.status(500).json({ error: "Failed to process order" });
  }
});

// Optional: Separate endpoint to send email if you still want it
app.post("/sendEmail", async (req, res) => {
  const { subject, message } = req.body;
  try {
    await sendEmail({ subject, message });
    res.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Failed to send email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
