const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/orders", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const orderSchema = new mongoose.Schema({
    orderNumber: { type: String, unique: true },
    createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
