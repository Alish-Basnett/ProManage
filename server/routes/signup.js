const express = require("express");
const router = express.Router();
const sql = require("mssql");
const bcrypt = require("bcrypt");

module.exports = (poolPromise) => {
  router.post("/register", async (req, res) => {
    try {
      console.log("Request body:", req.body); // Add this line
      const pool = await poolPromise;
      const { email, password } = req.body;

      if (!email || !password) {
        return res
          .status(400)
          .json({ message: "email and Password are required" });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log("Hashed Password:", hashedPassword);

      // Insert user into database
      const query = `
        INSERT INTO Users (Email, Password)
        VALUES (@Email, @Password)
      `;

      const result = await pool
        .request()
        .input("Email", sql.NVarChar, email)
        .input("Password", sql.NVarChar, hashedPassword) // Use the hashed password

        .query(query);

      if (result.rowsAffected[0] === 1) {
        res.status(201).json({ message: "User registered successfully" });
      } else {
        res.status(500).json({ message: "Failed to register user" });
      }
    } catch (err) {
      console.error("SQL error", err);
      res.status(500).send("Server error");
    }
  });

  return router;
};
