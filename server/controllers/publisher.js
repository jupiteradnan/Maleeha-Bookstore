const { book } = require('../models');
const {publisher} = require('../models');

const createPublisher = async (req, res) => {
   
  const createdPublisher = await publisher.findOne(req.body, { raw: true, include: { model: book } });
  res.json({ success: true, message: 'Publisher created successfully', data: createdPublisher });
};


const deletePublisher = async (req, res) =>{
  
    const id = req.params.id;
    const success = await publisher.destroy({
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
     message: 'Publisher has been deleted successfully!'
});
}



const getPublisherDetails = async (req, res) =>{
  const publisherDetails = await publisher.findAll();
    if(!publisherDetails){
      return res.status(200).send({
      status: 404,
      message: 'No data found'
 });
 }
    res.status(200).send({
      status: 200,
      message: 'Data found!',
      data: publisherDetails
 });
 
 }

const publisherController = {
  createPublisher, 
  deletePublisher,
  getPublisherDetails
  
};

module.exports = publisherController;