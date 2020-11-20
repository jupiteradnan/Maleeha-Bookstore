"use strict";

const fs = require("fs");
const path = require("path");
const { Sequelize, DataTypes } = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];

let db = {};

// all models needs to be imported here
const book = require("./book");
const user = require("./user");
const publisher = require("./publisher");
const publish_history = require("./publish_history");
const purchase_history = require("./purchase_history");
const bookshop = require("./bookshop");
const book_bookshop = require("./book_bookshop");
const publisher_publish_history = require("./publisher_publish_history");


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

db.book  = book( sequelize, DataTypes) ;
db.user = user( sequelize, DataTypes);
db.publisher = publisher( sequelize, DataTypes);
db.publisher_history = publish_history( sequelize, DataTypes);
db.purchase_history = purchase_history( sequelize, DataTypes);
db.bookshop = bookshop( sequelize, DataTypes);
db.book_bookshop = book_bookshop( sequelize, DataTypes);
db.publisher_publish_history = publisher_publish_history( sequelize, DataTypes); 


Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
