// importing required packages

const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const runMig = require("./initialize");
const routes = require("./server/routes/index");
const hostname = "127.0.0.1";

const port = 3020;

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
runMig();

 routes(app);

app.get("*", (req, res) =>
  res.status(200).send({
    message: "Welcome to Bookstore.",
  })
);


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;



