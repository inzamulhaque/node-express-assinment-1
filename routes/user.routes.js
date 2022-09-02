const express = require("express");
const allUser = require("../controllers/allUser");
const randomUser = require("../controllers/randomUser");
const saveUser = require("../controllers/saveUser");
const updateOneUser = require("../controllers/updateOneUser");
const uniqueIdValidation = require("../middleware/uniqueIdValidation");
const validateUser = require("../middleware/validateUser");
const validateUserId = require("../middleware/validateUserId");
const router = express.Router();

router.get("/random", randomUser);

router.get("/all", allUser);

router.post("/save", validateUser, uniqueIdValidation, saveUser);

router.patch("/update/:id", validateUserId, updateOneUser);

module.exports = router;
