// importing required packages
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");

const app = express();
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("*", (req, res) =>
  res.status(200).send({
    message: "Welcome to the .",
  })
);

module.exports = app;
