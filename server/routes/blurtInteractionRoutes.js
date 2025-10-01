const express = require("express");
const { likeBlurt, dislikeBlurt, markSeen, getBlurtStats } = require("../controllers/blurtInteractionController");

const router = express.Router();

router.post("/like", likeBlurt);
router.post("/dislike", dislikeBlurt);
router.post("/seen", markSeen);
router.get("/stats/:blurt_id", getBlurtStats);

module.exports = router;
