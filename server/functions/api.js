const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();

//for registering
router.get("/api/users/register", (req, res) => {
  res.send("User is registered.");
});

//for login
router.get("/api/users/login", (req, res) => {
  res.send("User is logged in.");
});

app.use("/.netlify/functions/api", router);
module.exports.handler = serverless(app);
