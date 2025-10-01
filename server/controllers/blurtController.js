const Blurt = require("../models/blurtModel");

exports.createBlurt = async (req, res) => {
  try {
    const { blurt_id, content } = req.body;
    const newBlurt = new Blurt({ blurt_id, content });
    await newBlurt.save();
    res.status(201).json({ message: "Blurt created successfully", newBlurt });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllBlurts = async (req, res) => {
  try {
    const blurts = await Blurt.find().sort({ createdAt: -1 }); // Latest first
    res.json(blurts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
