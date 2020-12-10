 const { user, book, publisher, publish_history, purchase_history, bookshop} = require('../controllers');
 const { check, validationResult } = require('express-validator');
 const {validate} = require('../custom/validator');
 const { verifyRegister,authJwt} = require("../middleware");

 module.exports = (app) => {

     app.get('/api', (req, res) => res.status(200).send({
       message: 'Welcome to the BookStore API!',
     }));
     
     // User APIs 
    
    /*app.post(
      '/api/user/register',
      [
          check('email').isEmail(),
          check('password').isLength({ min: 5 }),
      ],
      validate,
      user.createUser);  */

      app.post("/api/auth/register", [verifyRegister.checkDuplicateUsernameOrEmail],user.createUser);
     app.post('/api/user/login', user.login);
     app.delete('/api/user/delete/:id', authJwt.verifyToken, user.deleteUser);
     app.get('/api/user/listUsers',authJwt.verifyToken, user.listAllUsers);
     
      // Book APIs
     app.post(
      '/api/book/create',
      [
          check('title').exists(),
      ],
      validate,
      book.createBook);

     app.delete('/api/book/delete/:id', book.deleteBook);
     app.get('/api/book/listBooks', book.listAllBooks);
     app.get('/api/book/getBooksByUserId/:id', book.getBooksByUserId);
     app.get('/api/book/getCount/:id', book.getCount);

     
      // Publisher APIs
     app.post(
      '/api/publisher/create',
      [
         check('name').exists(),
       ],
         validate,
      publisher.createPublisher);
     app.delete('/api/publisher/delete/:id', publisher.deletePublisher);
     app.get('/api/publisher/listPublishers', publisher.listAllPublishers);

     // Publish history APIs
     app.post('/api/publishHistory/create', publish_history.createPublishHistory);
     app.delete('/api/PublishHistory/delete/:id', publish_history.deletePublishHistory);
     app.get('/api/PublishHistory/listPublishHistory', publish_history.listPublishHistory);
     app.get('/api/PublishHistory/getPublishHistoryByBookId/:id', publish_history.getPublishHistoryByBookId);

   // Purchase history APIs
     app.post('/api/purchaseHistory/create', purchase_history.createPurchaseHistory);
     app.delete('/api/PurchaseHistory/delete/:id', purchase_history.deletePurchaseHistory);
     app.get('/api/purchaseHistory/getPurchaseHistory', purchase_history.listPurchaseHistory);

     //Bookshop APIs
     app.post(
         '/api/bookshop/create',
         [
             check('name').exists(),
         ],
         validate,
         bookshop.createBookshop);
     app.delete('/api/bookshop/delete/:id', bookshop.deleteBookshop);
     app.get('/api/bookshop/listBookshops', bookshop.listAllBookshops);
 };

