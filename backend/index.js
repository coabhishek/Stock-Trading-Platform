require("dotenv").config();
const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const HoldingsModel = require("./models/holdingModel");
const PositionModel = require("./models/positionMode");
const OrderModel = require("./models/orderModel");
const User = require("./models/user");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");  // password hash ke liye
const jwt = require("jsonwebtoken"); // login ke liye

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// --- API Routes ---

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositon", async (req, res) => {
  let allPositon = await PositionModel.find({});
  res.json(allPositon);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrderModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  await newOrder.save();
  res.send("order was saved");
});

app.get("/allOrders", async (req, res) => {
  let allOrders = await OrderModel.find({});
  res.json(allOrders);
});

// --- Auth Routes ---

// User route signup
app.post("/signup", async (req, res) => {
  try {
    let { email, password, username } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      username,
      password: hashPassword,
    });
    await newUser.save();
    res.status(201).json({ message: "Signup successful!", success: true });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Login route
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email }, 
      process.env.JWT_SECRET || "MY_SUPER_SECRET_KEY", 
      { expiresIn: "3d" }
    );

    res.status(200).json({
      message: "Login successful!",
      success: true,
      token,
      user: {
        username: user.username,
        email: user.email,
      },
    });

  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// New Logout Route Add Kiya Hai
app.post("/logout", (req, res) => {
  try {
    // Stateless JWT me backend se sirf success confirmation response bhejte hain
    res.status(200).json({ 
      success: true, 
      message: "Logged out successfully! Please clear the token from frontend." 
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Server listener control (Fixed parameters from req, res to standard callback)
app.listen(PORT, () => {
  console.log(`SERVER IS LISTENING ON PORT ${PORT}`);
  mongoose.connect(uri)
    .then(() => console.log("MongoDB connected successfully!"))
    .catch((err) => console.log("MongoDB connection error:", err));
});
