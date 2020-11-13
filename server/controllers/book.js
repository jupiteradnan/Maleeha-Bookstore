/*
const models = require('../models/book');
const { Book } = models;


 class Books {

  static createBook(req, res) {
   const { id, title, author, category, price, pages } = req.body

          Book.create({ 
          id,
          title,
          author,
          category,
          pages
        })
        
        .then(book => res.status(201).send({
          success: true,
          message: 'Book successfully created',
          book
        }))
    }
}

module.exports = Users

*/