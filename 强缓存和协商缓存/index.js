const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");

const app = express();
app.use(serveStatic("view"));
app.use("*", (req, res) => {
  res.setHeader("Cache-Control", "no-store");
  res.sendFile(path.resolve(__dirname, "./index.html"));
});

app.listen(3000, () => {
  console.log("Server is running http://localhost:3000");
});
