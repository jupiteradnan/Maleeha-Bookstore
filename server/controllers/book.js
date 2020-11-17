
const { user, book } = require('../models');

const createBook = async (req, res) => {
  try{const createdBook = await book.findOne( req.body, { raw: true, include: { model: user } });
  console.log(createdBook);
  res.json({ success: true, message: 'Book has been added successfully', data: createdBook });
}
catch(err){

}
};

const deleteBook = async (req, res) =>{
  
    const id = req.params.id;
    const success = await book.destroy({
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
 const bookDetails = await book.findAll();
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

