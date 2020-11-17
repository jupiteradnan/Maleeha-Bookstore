const { publisher_history } = require('../models');


const createPublisher_history = async (req, res) => {
   
  const createdPublisher_history = await publisher_history.findOne(req.body, { raw: true, include: { model: book } });
  res.json({ success: true, message: 'Publisher history created successfully', data: createdPublisher_history });
};


const deletePublisher_history = async (req, res) =>{
  
    const id = req.params.id;
    const success = await publisher_history.destroy({
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
     message: 'Publisher history has been deleted successfully!'
});
}



const getPublisher_history = async (req, res) =>{
  const publisher_historyDetails = await publisher_history.findAll();
    if(!publisher_historyDetails){
      return res.status(200).send({
      status: 404,
      message: 'No data found'
 });
 }
    res.status(200).send({
      status: 200,
      message: 'Data found!',
      data: publisher_historyDetails
 });
 
 }

const publisher_historyController = {
  createPublisher_history, 
  deletePublisher_history,
  getPublisher_history
  
};

module.exports = publisher_historyController;