const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.googleCallback = async (req, res) => {
  try {
    const user = req.user;
    const token = jwt.sign({ googleId: user.googleId, _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    console.log("iefbvhbfhbfvhbfdhb");
    // res.redirect(`http://localhost:5173/blurt?token=${token}`);
    res.redirect(`https://nahneedpfft.com/blurt?token=${token}`);

    
  } catch (error) {
    res.redirect("/login");
  }
};

// Logout
exports.logout = (req, res) => {
  req.logout((err) => {
    if (err) return res.status(500).json({ message: "Logout failed", error: err });
    res.json({ message: "Logged out successfully" });
  });
};

// Save user preferences (color + mode + name + nickname)
exports.saveUserPreferences = async (req, res) => {
  console.log("sup");
  const { userId, name, nickname, color, mode } = req.body;

  try {
    let user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.name = name;
    user.nickname = nickname;
    user.color = color;
    user.mode = mode; // Store the mode (0 for dark, 1 for light)
    await user.save();

    res.status(200).json({ message: "Preferences saved", user });
  } catch (error) {
    res.status(500).json({ message: "Error saving preferences", error });
  }
};

// Get user preferences
exports.getUserPreferences = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({
      _id: user._id,
      name: user.name,
      nickname: user.nickname,
      color: user.color,
      mode: user.mode || false, // Default mode is dark
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching user data", error });
  }
};

