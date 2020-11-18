const model = require('../models');

const createPublisher = async (req, res) => {
  try{
    let publisher = req.body;
    const createdPublisher = await model.publisher.create(publisher);
    console.log(createdPublisher);
    res.json({ success: true, message: 'Publisher created successfully', data:publisher }); 
}
  catch(err){
  throw err;
}
};


const deletePublisher = async (req, res) =>{
  
    const id = req.params.id;
    const success = await model.publisher.destroy({
      where: { id: id }
    })

  if(!success){
   return res.status(200).send({
     status: 404,
     message: 'No data found'
});
}
  else {return res.status(200).send({
     status: 200,
     message: 'Publisher has been deleted successfully!'});
  }

}



const getPublisherDetails = async (req, res) =>{
  let publisherDetails = await model.publisher.findAll();
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