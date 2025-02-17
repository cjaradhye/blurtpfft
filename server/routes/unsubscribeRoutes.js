const express = require("express");
const router = express.Router();

const unsubscribeController = require("../controllers/unsubscribeController");
router.post("/", unsubscribeController.unsubscribe);

module.exports = router;