const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const { signup, signIn, signOut } = require("../controllers/auth");

// sign up route...
router.post(
  "/signup",
  check("name")
    .isLength({ min: 5 })
    .withMessage("Name should be of at least five characters"),
  check("password")
    .isLength({ min: 8 })
    .withMessage("Password should be min 8 character long"),
  signup
);

/**
 * signIn route
 */
router.post(
  "/signin",
  check("email").isEmail().withMessage("Incorrect email entered.."),
  check("password")
    .isLength({ min: 8 })
    .withMessage("Password should be 8 chars and above"),
  signIn
);

/**
 * signOut route ...
 */
router.get("/signout", signOut);

module.exports = router;
