const express = require("express");
const router = express.Router();
const userController = require("../controllers/stuffController");

router.post("/", userController.saveUser);
router.get("/", (req, res) => res.send("Welcome to the Stuff!"));

module.exports = router;
