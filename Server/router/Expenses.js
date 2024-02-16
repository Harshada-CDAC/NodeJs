const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// GET method to retrieve all expenses
app.get("/expenses", (req, res) => {
  const sql = "SELECT * FROM expenses";
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(result);
  });
});

// POST method to add a new expense
app.post("/expenses", (req, res) => {
  const { amount, category, description } = req.body;
  const sql = "INSERT INTO expenses (amount, category, description) VALUES (?, ?, ?)";
  db.query(sql, [amount, category, description], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: "Expense added successfully", id: result.insertId });
  });
});
module.exports = router
