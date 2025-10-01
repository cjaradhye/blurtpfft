const BlurtInteraction = require("../models/blurtInteractionModel");

exports.likeBlurt = async (req, res) => {
  try {
    const { user_id, blurt_id } = req.body;
    const interaction = await BlurtInteraction.findOneAndUpdate(
      { user_id, blurt_id },
      { liked: true, disliked: false, seen: true, timestamp: new Date() },
      { upsert: true, new: true }
    );
    res.json({ message: "Blurt liked", interaction });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.dislikeBlurt = async (req, res) => {
  try {
    const { user_id, blurt_id } = req.body;
    const interaction = await BlurtInteraction.findOneAndUpdate(
      { user_id, blurt_id },
      { liked: false, disliked: true, seen: true, timestamp: new Date() },
      { upsert: true, new: true }
    );
    res.json({ message: "Blurt disliked", interaction });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.markSeen = async (req, res) => {
  try {
    const { user_id, blurt_id } = req.body;
    const interaction = await BlurtInteraction.findOneAndUpdate(
      { user_id, blurt_id },
      { seen: true, timestamp: new Date() },
      { upsert: true, new: true }
    );
    res.json({ message: "Blurt marked as seen", interaction });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBlurtStats = async (req, res) => {
  try {
    const { blurt_id } = req.params;
    const likes = await BlurtInteraction.countDocuments({ blurt_id, liked: true });
    const dislikes = await BlurtInteraction.countDocuments({ blurt_id, disliked: true });
    res.json({ blurt_id, likes, dislikes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
