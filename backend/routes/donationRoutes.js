const express = require("express");
const router = express.Router();
const Donation = require("../models/donationModel");

// Create new donation
router.post("/", async (req, res) => {
  const { foodDescription, quantity, location, contactNumber, userId } = req.body;

  try {
    const donation = new Donation({
      user: userId,
      foodDescription,
      quantity,
      location,
      contactNumber,
    });

    const saved = await donation.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: "Error creating donation", error });
  }
});

// Get all donations (for dashboard)
router.get("/", async (req, res) => {
  try {
    const donations = await Donation.find().populate("user", "name email");
    res.json(donations);
  } catch (error) {
    res.status(500).json({ message: "Error fetching donations", error });
  }
});

module.exports = router;
