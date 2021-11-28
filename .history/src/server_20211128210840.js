const express = require("express");
const path = require("path");
const fs = require("fs");
const app = new express();

app.use("/static", express.static(
    path.join(__dirname, "build/static")
));

app.get("*", (req, res) => {
   return res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(3000, () => {
  console.log("listened on 3000");
});