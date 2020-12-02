const model = require('../models');

const createBookshop = async (req, res) => {
  try{
    let bookshop = req.body;
    const createdBookshop = await model.bookshop.create(bookshop);
    console.log(createdBookshop)
    res.json({ success: true, message: 'Bookshop created successfully', data:createdBookshop });
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
     message: 'No data found' });
     }

  else
      {
      return res.status(200).send({
     status: 200,
     message: 'Bookshop has been deleted successfully!'  });
  }             
}
    
   let listAllBookshops = async (req, res) =>{
     let bookshops = await model.bookshop.findAll();
       if(!bookshops){
         return res.status(200).send({
         status: 404,
         message: 'No data found'
    });
    }
       else {
           return res.status(200).send({
               status: 200,
               message: 'Data found!',
               data: bookshops });
       }
    
    }
   
   const bookshopController = {
     createBookshop, 
     deleteBookshop,
       listAllBookshops
     
   };
   
   module.exports = bookshopController;