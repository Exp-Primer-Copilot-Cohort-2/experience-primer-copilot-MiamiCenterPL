// Create web server
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");

app.use(bodyParser.json());

// Get all comments
app.get("/comments", (req, res) => {
  const comments = JSON.parse(fs.readFileSync("comments.json"));
  res.send(comments);
});

// Create a new comment
app.post("/comments", (req, res) => {
  const comment = req.body;
  const comments = JSON.parse(fs.readFileSync("comments.json"));
  comments.push(comment);
  fs.writeFileSync("comments.json", JSON.stringify(comments));
  res.send(comment);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});