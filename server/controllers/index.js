const user = require('./user');
const book = require('./book');
const publisher = require('./publisher');
const publish_history = require('./publish_history');
const purchase_history = require('./purchase_history');
const bookshop = require('./bookshop');

const mainController = { user,book, publisher, publish_history, purchase_history, bookshop};

module.exports = mainController;