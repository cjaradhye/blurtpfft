const mongoose = require("mongoose");

const blurtSchema = new mongoose.Schema({
  blurt_id: { type: String, required: true, unique: true }, // e.g., "blurt_2025_02_21"
  content: { type: Object, required: true }, // Stores the JSON chat data
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Blurt", blurtSchema);
