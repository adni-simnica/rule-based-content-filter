const express = require("express");
const router = express.Router();

const processController = require("../controllers/process.controller");

router.post("/", processController.processText);

module.exports = router;