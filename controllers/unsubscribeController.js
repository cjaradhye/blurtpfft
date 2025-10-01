const Unsubscribe = require("../models/Unsubscribe");

exports.unsubscribe = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: "Email is required" });
    
    await Unsubscribe.create({ email });
    res.status(200).json({ message: "Successfully unsubscribed" });
  } catch (error) {
    res.status(500).json({ error: "Unsubscribe failed" });
  }
};