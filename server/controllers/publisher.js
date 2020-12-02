const model = require('../models');

const createPublisher = async (req, res) => {
  try{
    let publisher = req.body;
    const createdPublisher = await model.publisher.create(publisher);
   // console.log(createdPublisher);
    res.json({ success: true, message: 'Publisher created successfully', data:createdPublisher });
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

  else {
      return res.status(200).send({
        status: 200,
        message: 'Publisher has been deleted successfully!'});
  }
}

const listAllPublishers = async (req, res) =>{
  let publishers = await model.publisher.findAll();
    if(!publishers){
      return res.status(200).send({
      status: 404,
      message: 'No data found'
                });
 }
    else {
            return res.status(200).send({
            status: 200,
            message: 'Data found!',
            data: publishers });

    }
 
 }

const publisherController = {
  createPublisher, 
  deletePublisher,
    listAllPublishers
  
};

module.exports = publisherController;