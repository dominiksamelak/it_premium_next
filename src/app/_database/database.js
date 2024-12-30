const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/orders")
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

const orderSchema = new mongoose.Schema({
    orderNumber: { type: String, unique: true },
    createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
