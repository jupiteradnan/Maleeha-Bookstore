const model = require('../models');



const createPublisher_history = async (req, res) => {
  try{
    let publisher_history = req.body;
    const createdPublisher_history = await model.publish_history.create(publisher_history);
    console.log(createdPublisher_history);
    res.json({ success: true, message: 'Publisher history created successfully', data:publisher_history }); 
}
  catch(err){
  throw err;
}
};


const deletePublisher_history = async (req, res) =>{
  
    const id = req.params.id;
    const success = await model.publish_history.destroy({
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
     message: 'Publish history has been deleted successfully!'
});
}

const getPublisher_history = async (req, res) =>{
  try{ let publisher_historyDetails = await model.publish_history.findAll();
    if(!publisher_historyDetails){
      return res.status(200).send({
      status: 404,
      message: 'No data found'
 });
 }
    else {res.status(200).send({
      status: 200,
      message: 'Data found!',
      data: publisher_historyDetails  });
    }
} catch(err){
  throw err;
}
 }

 const getPublishHistoryByBookId = async (req, res) =>
 {
    //const bookId = req.params.id;
    const publish_history = await model.publish_history.findAll({
     // where: { bookId: bookId }
      where: { bookId: 1 }
    })

    console.log(publish_history);
    if(!publish_history){
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

const publisher_historyController = {
  createPublisher_history, 
  deletePublisher_history,
  getPublisher_history,
  getPublishHistoryByBookId
  
};

module.exports = publisher_historyController;