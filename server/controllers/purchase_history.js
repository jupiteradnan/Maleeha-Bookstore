const model = require('../models');

const createPurchase_history = async (req, res) => {
   
  try{
    let purchase_history = req.body;
    const createdPurchase_history = await model.purchase_history.create(purchase_history);
    console.log(createdPurchase_history);
    res.json({ success: true, message: 'Purchase history created successfully', data:purchase_history }); 
}
  catch(err){
  throw err;
}
};
  

const deletePurchase_history = async (req, res) =>{
    const id = req.params.id;
    const success = await model.purchase_history.destroy({
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
  let purchase_historyDetails = await model.purchase_history.findAll();
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