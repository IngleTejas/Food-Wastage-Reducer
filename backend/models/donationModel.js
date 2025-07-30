const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  foodDescription: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Pending", // Pending, Accepted, Picked, Delivered
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model("Donation", donationSchema);
