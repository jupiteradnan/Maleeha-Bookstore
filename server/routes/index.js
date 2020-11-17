 const { user, book, publisher, publisher_history, purchase_history, bookshop} = require('../controllers');

 
 module.exports = (app) => {

     app.get('/api', (req, res) => res.status(200).send({
       message: 'Welcome to the BookStore API!',
     }));
     
     // User APIs
     app.post('/api/register', user.createUser); 
     app.get('/api/login', user.login);
     app.delete('/api/delete/:id', user.deleteUser);
     app.get('/api/getUser', user.getUserDetails);
     
      // Book APIs
     app.post('/api/book', book.createBook);
     app.delete('/api/deleteBook/:id', book.deleteBook);
     app.get('/api/getBook', book.getBookDetails);
     
      // Publisher APIs
     app.post('/api/publisher', publisher.createPublisher);
     app.delete('/api/deletePublisher/:id', publisher.deletePublisher);
     app.get('/api/getPublisher', publisher.getPublisherDetails);

     // Publisher history APIs
     app.post('/api/publisherHistory', publisher_history.createPublisher_history);
     app.delete('/api/deletePublisherHistory/:id', publisher_history.deletePublisher_history);
     app.get('/api/getPublisherHistory', publisher_history.getPublisher_history);


     // Purchase history APIs
     app.post('/api/purchaseHistory', purchase_history.createPurchase_history);
     app.delete('/api/deletePurchaseHistory/:id', purchase_history.deletePurchase_history);
     app.get('/api/getPurchaseHistory', purchase_history.getPurchase_history);

     //Bookshop APIs
     app.post('/api/bookshop', bookshop.createBookshop);
     app.delete('/api/deleteBookshop/:id', bookshop.deleteBookshop);
     app.get('/api/getBookshop', bookshop.getBookshopDetails);
 };

