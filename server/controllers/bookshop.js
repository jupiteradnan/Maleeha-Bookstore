const { bookshop } = require('../models');

const createBookshop = async (req, res) => {
   
     const createdBookshop = await bookshop.findOne(req.body, { raw: true, include: { model: book } });
     res.json({ success: true, message: 'Bookshop created successfully', data: createdBookshop });
   };
   
   
   const deleteBookshop = async (req, res) =>{
     
       const id = req.params.id;
       const success = await bookshop.destroy({
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
     const BookshopDetails = await bookshop.findAll();
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