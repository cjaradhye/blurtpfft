const Feedback = require("../models/Feedback");

exports.submitFeedback = async (req, res) => {
  try {
    const { positive, negative } = req.body;
    const feedback = new Feedback({ positive, negative });
    await feedback.save();
    res.status(201).json({ message: "Feedback submitted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to submit feedback" });
  }
};