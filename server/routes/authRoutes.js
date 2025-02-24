const express = require("express");
const passport = require("passport");
const authController = require("../controllers/authController");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/user");

router.get("/google/user", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ googleId: decoded.googleId });

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({googleId: user.googleId, name: user.name, nickname: user.nickname, color: user.color });
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
});

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login", session: false }),
  authController.googleCallback
);

// Fetch User Preferences (Frontend Expects This)
router.get("/users/:id", authController.getUserPreferences);

// Save User Preferences (Frontend Expects This)
router.post("/users/save", authController.saveUserPreferences);
  

module.exports = router;
