const express = require("express");
const router = express.Router();
const sql = require("mssql");
const bcrypt = require("bcrypt");

module.exports = (poolPromise) => {
  router.post("/login", async (req, res) => {
    try {
      const pool = await poolPromise;
      const { email, password } = req.body;

      if (!email || !password) {
        return res
          .status(400)
          .json({ message: "Email and Password are required" });
      }

      // Fetch the user from the database
      const query = `
        SELECT userID, password FROM Users WHERE email = @email
      `;
      const result = await pool
        .request()
        .input("email", sql.NVarChar, email) // Change "Email" to "email" here
        .query(query);

      if (result.recordset.length === 0) {
        return res
          .status(401)
          .json({ message: "Invalid username or password" });
      }

      const user = result.recordset[0];
      const isMatch = await bcrypt.compare(password, user.password); // Change "user.Password" to "user.password"

      if (!isMatch) {
        return res
          .status(401)
          .json({ message: "Invalid username or password" });
      }

      res
        .status(200)
        .json({ message: "Login successful", userID: user.userID }); // Change "user.UserID" to "user.userID"
    } catch (err) {
      console.error("SQL error", err);
      res.status(500).send("Server error");
    }
  });

  return router;
};
