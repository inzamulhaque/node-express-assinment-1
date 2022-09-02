const express = require("express");
const allUser = require("../controllers/allUser");
const randomUser = require("../controllers/randomUser");
const saveUser = require("../controllers/saveUser");
const updateOneUser = require("../controllers/updateOneUser");
const uniqueIdValidation = require("../middleware/uniqueIdValidation");
const validateUser = require("../middleware/validateUser");
const validateUserId = require("../middleware/validateUserId");
const router = express.Router();

/**
 * @api {get} /random Get Random User
 * @apiDescription Get Random User
 *
 * @apiSuccess {Object[]} random User
 */
router.get("/random", randomUser);

/**
 * @api {get} /all All User
 * @apiDescription Get all User
 *
 * @apiParam  {Number{1-}}         [page=1]     List page
 * @apiParam  {Number{1-}}      [limit=10]  Users per page
 *
 * @apiSuccess {Object[]} All User.
 */
router.get("/all", allUser);

/**
 * @api {post} /save Create a new user
 * @apiDescription Create new user
 *
 * @apiSuccess new user created.
 */
router.post("/save", validateUser, uniqueIdValidation, saveUser);

/**
 * @api {patch} /update/:id update one user info
 * @apiDescription update one user info
 *
 * @apiSuccess update one user info.
 */
router.patch("/update/:id", validateUserId, updateOneUser);

module.exports = router;
