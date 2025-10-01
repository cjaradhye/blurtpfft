const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  googleId: { type: String, required: true, unique: true },
  name: { type: String, required: true }, // Real name from Google
  nickname: { type: String, default: "" }, // Custom display name
  email: { type: String, required: true, unique: true },
  picture: { type: String },
  color: { type: String, default: "" }, // Default color
  mode: {type: Boolean, default: false}, // 0 for black, 1 for white
  settings: {type: Object, default: {
    taptalk: true,
    automatictalk: {
      main: true,
      speed: 2
    }
  }}
});

module.exports = mongoose.model("User", userSchema);
