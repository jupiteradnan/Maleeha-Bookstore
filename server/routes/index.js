 const Users = require('../controllers/user');

 module.exports = (app) => {

     app.get('/api', (req, res) => res.status(200).send({
       message: 'Welcome to the BookStore API!',
     }));

     app.post('/api/register', Users.registerUsers); // API route for user to signup
        
  };

