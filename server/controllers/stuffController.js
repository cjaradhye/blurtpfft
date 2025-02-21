const User = require("../models/Stuff");

exports.saveUser = async (req, res) => {
  const { name, color } = req.body;

  if (!name || !color) {
    return res.status(400).json({ error: "Name and color are required." });
  }

  try {
    const newUser = new User({ name, color });
    await newUser.save();
    res.status(201).json({ message: "User saved successfully!", user: newUser });
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
