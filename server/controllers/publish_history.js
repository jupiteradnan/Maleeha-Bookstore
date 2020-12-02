const model = require('../models');

const createPublishHistory = async (req, res) => {
  try{
    let publish_history = req.body;
    const createdPublishHistory = await model.publish_history.create(publish_history);
    console.log(createdPublishHistory);
    res.json({ success: true, message: 'Publish history created successfully', data:createdPublishHistory });
}
  catch(err){
  throw err;
}
};

const deletePublishHistory = async (req, res) =>{
  
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
  else{
      return res.status(200).send({
          status: 200,
          message: 'Publish history has been deleted successfully!'
      });
  }
}

const listPublishHistory = async (req, res) =>{
  try{ let publisher_historyDetails = await model.publish_history.findAll();
    if(!publisher_historyDetails){
      return res.status(200).send({
      status: 404,
      message: 'No data found'
 });
 }
    else {
        return res.status(200).send({
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
     try{
         const bookId = req.params.id;
         const publishHistory = await model.publish_history.findAll({
             where: { bookId: bookId }
         });

         // console.log(publish_history);
         if(!publishHistory){
                 return res.status(200).send({
                 status: 404,
                 message: 'No data found'
             });
         }
         else {
                 return res.status(200).send({
                 status: 200,
                 message: 'Data found!',
                 data: publishHistory
             });
         }
     }catch(err)
     {
         throw err
     }

 }

const publishHistoryController = {
    createPublishHistory,
    deletePublishHistory,
    listPublishHistory,
    getPublishHistoryByBookId
  
};

module.exports = publishHistoryController;