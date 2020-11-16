 const { user, book} = require('../controllers');
 //const { book, user } = require('../controllers');
 
 module.exports = (app) => {

     app.get('/api', (req, res) => res.status(200).send({
       message: 'Welcome to the BookStore API!',
     }));

     app.post('/api/register', user.createUser); 
     app.post('/api/book', book.createBook);
     app.delete('/api/delete/:id', user.deleteUser);
     app.get('/api/getuser', user.getUserDetails);
     app.get('/api/getbook', book.getBookDetails);
     app.get('/api/login', user.login);
    
 };

