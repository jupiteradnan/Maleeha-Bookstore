const model = require('../models');

const createBook = async (req, res) => {
    try{
      let book = req.body;
      const createdBook = await model.book.create(book);
      console.log(createdBook)
      res.json({ success: true, message: 'Book created successfully', data:book }); 
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
  
  
  const getBookDetails = async (req, res) =>{
    let bookDetails = await model.book.findAll();
      if(!bookDetails){
        return res.status(200).send({
        status: 404,
        message: 'No data found'
   });
   }
        res.status(200).send({
        status: 200,
        message: 'Data found!',
        data: bookDetails
   });
   
   }

   const getBooksByUserId = async (req, res) =>{
   // const userId = req.params.id;
    const books = await model.book.findAll({
      where: { userId: 1 }
    })

    console.log("output:"+books);
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
        });
    }  
   
  }

const bookController = {

  createBook,
  deleteBook,
  getBookDetails,
  getBooksByUserId
};

module.exports = bookController; 

