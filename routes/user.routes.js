const express = require("express");
const randomUser = require("../controllers/randomUser");
const saveUser = require("../controllers/saveUser");
const uniqueIdValidation = require("../middleware/uniqueIdValidation");
const validateUser = require("../middleware/validateUser");
const router = express.Router();

router.get("/random", randomUser);

router.post("/save", validateUser, uniqueIdValidation, saveUser);

module.exports = router;
