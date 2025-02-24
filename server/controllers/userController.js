const User = require("../models/user");

// Save or update user data
exports.saveUserData = async (req, res) => {
  console.log(req.body);
  const { googleId, name, nickname, color, mode, settings } = req.body;

  if (!googleId) {
    return res.status(400).json({ error: "Google ID is required" });
  }

  try {
    // Use `findOneAndUpdate` to update in one step
    let user = await User.findOneAndUpdate(
      { googleId }, // Find by Google ID
      { $set: { nickname, color, mode, settings } }, // Update fields
      { new: true, upsert: true, runValidators: true } // Return updated doc, create if not found, enforce schema validation
    );

    console.log("Updated User:", user);
    res.status(200).json({ message: "User data saved", user });
  } catch (error) {
    console.error("Error saving user:", error);
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
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Server error" });
  }
};
