const { purchase_history, book } = require('../models');


const createPurchase_history = async (req, res) => {
   
  const createdPublisher_history = await purchase_history.findOne(req.body, { raw: true, include: { model: book } });
  res.json({ success: true, message: 'Purchase history created successfully', data: createdPublisher_history });
};


const deletePurchase_history = async (req, res) =>{
  
    const id = req.params.id;
    const success = await purchase_history.destroy({
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
     message: 'Purchase history has been deleted successfully!'
});
}



const getPurchase_history = async (req, res) =>{
  const purchase_historyDetails = await purchase_history.findAll();
    if(!purchase_historyDetails){
      return res.status(200).send({
      status: 404,
      message: 'No data found'
 });
 }
    res.status(200).send({
      status: 200,
      message: 'Data found!',
      data: purchase_historyDetails
 });
 
 }

const purchase_historyController = {
  createPurchase_history, 
  deletePurchase_history,
  getPurchase_history
  
};

module.exports = purchase_historyController;