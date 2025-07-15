const app = require("../app");
const express = require("express");
const { signup, signin } = require("../controllers/user.controller");
const { newAccessToken } = require("../utils/jwt");
const { body, validationResult } = require("express-validator");

const router = express.Router();

router.post(
  "/signup",
  [
    body("username").notEmpty().withMessage("Username is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters"),
  ],
  signup
);
router.post(
  "/signin",
  [
    body("email").isEmail().withMessage("Valid email is required"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  signin
);
router.post("/refresh-token", newAccessToken);

module.exports = router;