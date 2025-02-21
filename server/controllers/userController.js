const User = require("../models/user");

// Save or update user data
exports.saveUserData = async (req, res) => {
  console.log("suwjfv");
  console.log(req.body);
  const { googleId, name, nickname, color, mode } = req.body;
  console.log(googleId);

  if (!googleId) {
    return res.status(400).json({ error: "Google ID is required" });
  }

  try {
    let user = await User.findOne({ googleId: googleId });
    console.log("User found:", user);

    if (user) {
      // Update existing user
      console.log("heretoo");
      user.nickname = nickname;
      user.color = color;
      user.mode = mode;
    } else {
      // Create new user
      user = new User({ googleId, name, nickname, color, mode });
    }

    await user.save();
    res.status(200).json({ message: "User data saved", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Get user data by Google ID
exports.getUserData = async (req, res) => {
  const { googleId } = req.params;

  if (!googleId) {
    return res.status(400).json({ error: "Google ID is required" });
  }

  try {
    const user = await User.findOne({ googleId });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
