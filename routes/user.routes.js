const express = require("express");
const saveUser = require("../controllers/saveUser");
const uniqueIdValidation = require("../middleware/uniqueIdValidation");
const validateUser = require("../middleware/validateUser");
const router = express.Router();

router.post("/save", validateUser, uniqueIdValidation, saveUser);

module.exports = router;
