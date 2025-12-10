const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello DevOps Project!");
});

app.get("/api/status", (req, res) => {
  res.json({ message: "Pipeline Working!", status: "success" });
});

app.listen(3000, () => console.log("Server running"));
module.exports = app;
