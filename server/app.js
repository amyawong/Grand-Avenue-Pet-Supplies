const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express();
module.exports = app;

app.use(morgan("dev")); // logging middleware
app.use(express.urlencoded({ extended: true })); // body parsing middleware
// app.use("/auth", require("./auth")); // auth routes

app.use("/api", require("./api")); // api routes

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "..", "public/index.html"))
);

app.use(express.static(path.join(__dirname, "..", "public"))); // static file-serving middleware

app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error("Not found");
    err.status = 404;
    next(err);
  } else {
    next();
  }
}); // any remaining requests with an extension(.js, .css, etc.) send 404

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/index.html"));
}); // sends index.html

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
}); // error handling endware

module.exports = app;
