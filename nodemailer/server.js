// server.js
const express = require("express");
const cors = require("cors");
const pool = require("./db"); // import db.js

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.post("/submitOrder", async (req, res) => {
  try {
    const formData = req.body;

    const currentDate = new Date();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    const startDate = `${year}-${month.toString().padStart(2, "0")}-01`;
    const endMonth = month === 12 ? 1 : month + 1;
    const endYear = month === 12 ? year + 1 : year;
    const endDate = `${endYear}-${endMonth.toString().padStart(2, "0")}-01`;

    const [rows] = await pool.query(
      `SELECT COUNT(*) AS count FROM orders WHERE created_at >= ? AND created_at < ?`,
      [startDate, endDate]
    );

    const count = rows[0].count;
    const orderNumber = `${count + 1}/${month}/${year}`;

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

    res.json({ orderNumber });
  } catch (err) {
    console.error("Error inserting form data:", err);
    res.status(500).json({ error: "Failed to save form data" });
  }
});

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
