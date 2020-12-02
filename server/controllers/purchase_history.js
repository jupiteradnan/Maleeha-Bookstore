const model = require('../models');

const createPurchaseHistory = async (req, res) => {
   
  try{
    let purchaseHistory = req.body;
    const createdPurchaseHistory = await model.purchase_history.create(purchaseHistory);
    console.log(createdPurchaseHistory);
    res.json({ success: true, message: 'Purchase history created successfully', data:createdPurchaseHistory });
}
  catch(err){
  throw err;
}
};
  

const deletePurchaseHistory = async (req, res) => {
    const id = req.params.id;
    const success = await model.purchase_history.destroy({
        where: {id: id}
    })

    if (!success) {
        return res.status(200).send({
            status: 404,
            message: 'No data found'
        });
    } else {

        return res.status(200).send({
        status: 200,
        message: 'Purchase history has been deleted successfully!'});

         }
}

const listPurchaseHistory = async (req, res) =>{
  let purchase_historyDetails = await model.purchase_history.findAll();
    if(!purchase_historyDetails){
      return res.status(200).send({
      status: 404,
      message: 'No data found'
 });
 }

      else {
        res.status(200).send({
            status: 200,
            message: 'Data found!',
            data: purchase_historyDetails
        });
    }
 
 }

const purchaseHistoryController = {
    createPurchaseHistory,
    deletePurchaseHistory,
    listPurchaseHistory
};

module.exports = purchaseHistoryController;