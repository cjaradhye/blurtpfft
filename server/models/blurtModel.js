const mongoose = require("mongoose");

const blurtSchema = new mongoose.Schema({
  blurt_name: { type: String, required: true, unique: true }, // e.g., "blurt_2025_02_21"
  content: { type: Array, required: true }, // Stores the JSON chat data
  createdAt: { type: Date, default: Date.now },
  newsSources : {type: Array, required: true},
  link:{type: String, required: true}
});

module.exports = mongoose.model("Blurt", blurtSchema);
