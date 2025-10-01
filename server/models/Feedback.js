const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
  positive: { type: String, required: true },
  negative: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Feedback", FeedbackSchema);