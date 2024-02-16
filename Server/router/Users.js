const express = require("express");
const db = require("../db");
const utils = require("../utils");
const router = express.Router();

router.post("/register", (request, response) => {
  const { uname, email, password, mobile } = request.body;
  db.query(
    "INSERT INTO Users (Username, Email, Password, Mobile) VALUES (?, ?, ?, ?)",
    [uname, email, password, mobile],
    (error, result) => {
      response.send(utils.createResult(error, result));
    }
  );
});

router.post("/login", (request, response) => {
  const { email, password } = request.body;
  const statement = "SELECT * FROM Users WHERE Email = ? AND Password = ?";
  db.query(statement, [email, password], (error, result) => {
    response.send(utils.createResult(error, result));
  });
});

router.get("/:id", (request, response) => {
  const id = request.params.id;
  const statement = "SELECT * FROM Users WHERE UserID = ?";
  db.query(statement, [id], (error, result) => {
    response.send(utils.createResult(error, result));
  });
});

module.exports = router;
