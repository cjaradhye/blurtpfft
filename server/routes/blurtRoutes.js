const express = require("express");
const { createBlurt, getAllBlurts } = require("../controllers/blurtController");

const router = express.Router();

router.post("/", createBlurt);
router.get("/", getAllBlurts);

module.exports = router;
