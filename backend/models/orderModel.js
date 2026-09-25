const { model } = require("mongoose");
const orderSchema = require("../schemas/orderSchema"); // Agar schema alag file me hai toh sahi path dein

// 1. Sahi tarika model banane ka (bina 'new' keyword ke)
const orderModel = model("Order", orderSchema);

// 2. Sirf orderModel ko export karein
module.exports = orderModel;