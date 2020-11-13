 const { user } = require('../controllers');
 //const Book = require('../controllers/book');
 
 


 module.exports = (app) => {

     app.get('/api', (req, res) => res.status(200).send({
       message: 'Welcome to the BookStore API!',
     }));

     app.post('/api/register', user.createUser); 
     app.delete('/api/delete/:id', user.deleteUser);
     //app.get('/api/login', user.login)
     //app.get('/api/list', user.getUser);

     //app.post('/api/book', Book.createBook);   
  };

