const bcrypt = require("bcrypt");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const Token = require("../models/token.model");
const Post = require("../models/post.model");
const Community = require("../models/community.model");

const LOG_TYPE = {
    SIGN_IN: "sign in",
    LOGOUT: "logout",
  };
  
  const LEVEL = {
    INFO: "info",
    ERROR: "error",
    WARN: "warn",
  };
  
  const MESSAGE = {
    SIGN_IN_ATTEMPT: "User attempting to sign in",
    SIGN_IN_ERROR: "Error occurred while signing in user: ",
    INCORRECT_EMAIL: "Incorrect email",
    INCORRECT_PASSWORD: "Incorrect password",
    DEVICE_BLOCKED: "Sign in attempt from blocked device",
    CONTEXT_DATA_VERIFY_ERROR: "Context data verification failed",
    MULTIPLE_ATTEMPT_WITHOUT_VERIFY:
      "Multiple sign in attempts detected without verifying identity.",
    LOGOUT_SUCCESS: "User has logged out successfully",
  };

  const addUser = async (req, res) => {
    try {
      const { username, name, email, password, birthday} = req.body;
      const user = new User({
        username,
        name,
        email,
        password,
        birthday,
      });
      const savedUser = await user.save();
      res.status(201).json(savedUser);
    } catch (err) {
      res.status(500).json(err);
    }
   
  };
