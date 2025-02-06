const Email = require("../models/email");

exports.saveEmail = async (req, res) => {
  const { email } = req.body;

  if (!/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  try {
    const newEmail = new Email({ email });
    await newEmail.save();
    res.status(201).json({ message: "Email saved successfully!" });
  } catch (error) {
    console.error("Error saving email:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};
