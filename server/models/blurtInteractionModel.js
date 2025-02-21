const mongoose = require("mongoose");

const blurtInteractionSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  blurt_id: { type: String, required: true }, // Matches the blurt_id from Blurt model
  liked: { type: Boolean, default: false },
  disliked: { type: Boolean, default: false },
  seen: { type: Boolean, default: false },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("BlurtInteraction", blurtInteractionSchema);
