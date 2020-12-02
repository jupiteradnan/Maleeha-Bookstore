const model = require('../models');

const createBook = async (req, res) => {
    try{
      let book = req.body;
      const createdBook = await model.book.create(book);
      console.log(createdBook)
      res.json({ success: true, message: 'Book created successfully', data:createdBook });
  }
    catch(err){
    throw err;
  }
  };

  const deleteBook = async (req, res) =>{
  
    const id = req.params.id;
    const success = await model.book.destroy({
    where: { id: id }
      })
  
    if(!success){
     return res.status(200).send({
       status: 404,
       message: 'No data found'});
        }
        
    else {res.status(200).send({
       status: 200,
       message: 'Book has been deleted successfully!'});
    }
  }
  
  
  const listAllBooks = async (req, res) =>{
      // findAndCountAll
    let books = await model.book.findAll();
      if(!books){
        return res.status(200).send({
        status: 404,
        message: 'No data found'
   });
   }
      else {
          res.status(200).send({
              status: 200,
              message: 'Data found!',
              data: books
          });
      }
   
   }

   const getBooksByUserId = async (req, res) =>{
   // const userId = req.params.id;
   try {
       const foundUser = await model.user.findOne({
           where: {
               id: req.params.id
           }
       });
       let userBooks = await foundUser.getBooks()
       console.log("output..........................................................:"+userBooks)
       if (!userBooks) {
           return res.status(200).send({
               status: 404,
               message: 'No data found'
           });
       } else {
           return res.status(200).send({
               status: 200,
               message: 'Data found!',
               data: userBooks
           });
       }
   }catch(err)
   {
       throw err
   }
  }

  // get count of books by user id
  const getCount = async (req, res) =>{
    let { page, limit } = req.query;
    console.log('---> page', page,'---> limit',  limit);
    let offset = limit * (page-1);
    offset = parseInt(offset);
    limit = parseInt(limit);
    const userId = req.params.id;

    let result = await model.book.findAndCountAll({
     where: {
     user_id: userId
 },
 offset: offset,
 limit: limit
    
     })

res.json(result)

 }  

const bookController = {

  createBook,
  deleteBook,
  listAllBooks,
  getBooksByUserId,
  getCount
};

module.exports = bookController; 

