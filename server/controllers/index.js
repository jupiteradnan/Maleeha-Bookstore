const user = require('./user');
const book = require('./book');
const publisher = require('./publisher');
const publish_history = require('./publish_history');
const purchase_history = require('./purchase_history');
const bookshop = require('./bookshop');
const validator = require('../custom/validator');

const mainController = { user,book, publisher, publish_history, purchase_history, bookshop, validator};

module.exports = mainController;