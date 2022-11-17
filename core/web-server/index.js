const express = require("express");

const app = express();

app.get("/health-check", ({ req, res }) => {
  res.send(
    "In Heaven Everything is fine. You got your good things. And I've got mine."
  );
});

app.listen(1919, () => {
  console.log("Coming to you from 1919");
});
