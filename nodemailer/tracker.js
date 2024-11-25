const express = require("express");
const cors = require("cors");
const Order = require("../src/app/_database/database"); // Import MongoDB model
const PORT = 4000;

const app = express();

app.use(cors());

app.get("/getOrderNumber", async (req, res) => {
  console.log("Endpoint hit at:", new Date().toISOString()); // Add this line
    try {
        const currentDate = new Date();
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();

        const count = await Order.countDocuments({
            createdAt: {
                $gte: new Date(`${year}-${month}-01`),
                $lt: new Date(`${year}-${month + 1}-01`),
            },
        });

        const orderNumber = `${count + 1}/${month}/${year}`;

        const newOrder = new Order({ orderNumber });
        await newOrder.save();

        res.json({ orderNumber });
    } catch (err) {
        console.error("Error generating order number:", err);
        res.status(500).json({ error: "Failed to generate order number" });
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
