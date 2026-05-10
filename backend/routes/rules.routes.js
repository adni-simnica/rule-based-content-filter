const express = require("express");
const router = express.Router();

const rulesController = require("../controllers/rules.controller");

router.post("/", rulesController.createRule);
router.get("/", rulesController.getRules);
router.delete("/:id", rulesController.deleteRule);

module.exports = router;