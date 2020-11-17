const model = require('../models');

const createBook = async (req, res) => {
    try{
      let book = req.body;
      const createdBook = await model.book.create(user);
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
       message: 'No data found'
  });
  }
    res.status(200).send({
       status: 200,
       message: 'Book has been deleted successfully!'
  });
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
  

const bookController = {

  createBook,
  deleteBook,
  getBookDetails
};

module.exports = bookController; 

