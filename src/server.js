const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("This is my portfolio!");
});

app.get("/api/status", (req, res) => {
  res.json({ message: "Pipeline Working!", status: "success" });
});

const server = app.listen(3000, () => console.log("Server running"));
module.exports = { app, server };

