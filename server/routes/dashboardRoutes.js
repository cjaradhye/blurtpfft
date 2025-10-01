const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboardController"); // Import controller

router.get("/", dashboardController.getDashboardData); // Ensure this function exists

module.exports = router;
