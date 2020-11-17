const model = require('../models');

const createBookshop = async (req, res) => {
  try{
    let bookshop = req.body;
    const createdBookshop = await model.bookshop.create(user);
    console.log(createdBookshop)
    res.json({ success: true, message: 'Book created successfully', data:bookshop }); 
}
  catch(err){
  throw err;
}
};

const deleteBookshop = async (req, res) =>{

  const id = req.params.id;
  const success = await model.bookshop.destroy({
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
     message: 'Bookshop has been deleted successfully!'
});
}
    
   const getBookshopDetails = async (req, res) =>{
     let BookshopDetails = await model.bookshop.findAll();
       if(!BookshopDetails){
         return res.status(200).send({
         status: 404,
         message: 'No data found'
    });
    }
       res.status(200).send({
         status: 200,
         message: 'Data found!',
         data: BookshopDetails
    });
    
    }
   
   const bookshopController = {
     createBookshop, 
     deleteBookshop,
     getBookshopDetails
     
   };
   
   module.exports = bookshopController;