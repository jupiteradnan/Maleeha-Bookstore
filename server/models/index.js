"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
let db = {};

// all models needs to be imported here
const book = require("./book");
const user = require("./user");
const publisher = require("./publisher");
const publisher_history = require("./publisher_history");
const purchase_history = require("./purchase_history");
const bookshop = require("./bookshop");
const book_bookshop = require("./book_bookshop");
const publisher_publisher_history = require("./publisher_publisher_history");


let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

db.book = book;
db.user = user;
db.publisher = publisher;
db.publisher_history = publisher_history;
db.purchase_history = purchase_history;
db.bookshop = bookshop;
db.book_bookshop = book_bookshop;
db.publisher_publisher_history = publisher_publisher_history;



Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
