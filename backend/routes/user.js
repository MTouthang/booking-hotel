const express = require("express");
const router = express.Router();

const { getUserById, getUserId, userBookList } = require("../controllers/user");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");

router.param("userId", getUserId);

router.get("/user/:userId", isSignedIn, isAuthenticated, getUserById); // getUserById

module.exports = router;
