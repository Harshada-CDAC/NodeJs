const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db"); // Assuming db.js contains your database connection
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// GET method to retrieve all income records
app.get("/income", (req, res) => {
  const sql = "SELECT * FROM Income";
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(result);
  });
});

// POST method to add a new income record
app.post("/income", (req, res) => {
  const { UserID, Amount, Source, Description, Date } = req.body;
  const sql = "INSERT INTO Income (UserID, Amount, Source, Description, Date) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [UserID, Amount, Source, Description, Date], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: "Income added successfully", id: result.insertId });
  });
});


module.exports = router
