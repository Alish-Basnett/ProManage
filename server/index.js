const express = require("express");
const sql = require("mssql");
const { config } = require("./dbconfig");
const cors = require("cors");

const app = express();
const port = 3001;

// Middleware for JSON parsing and CORS
app.use(express.json());
app.use(cors());

// Create connection pool
const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then((pool) => {
    console.log("Connected to SQL Server");
    return pool;
  })
  .catch((err) => {
    console.error("Database Connection Failed -", err);
    process.exit(1); // Exit the process if database connection fails
  });

// Import and use user routes
const signupRouter = require("./routes/signup");
const loginRouter = require("./routes/login");

// Use routes with poolPromise
app.use("/api/users", signupRouter(poolPromise));
app.use("/api/users", loginRouter(poolPromise));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
