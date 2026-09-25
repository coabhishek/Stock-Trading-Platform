const { Schema } = require("mongoose");

const holdingSchema = new Schema({
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
});

// Yahan curly braces {} nahi lagane hain, seedha export karna hai
module.exports = holdingSchema;