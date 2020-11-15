const { user, book } = require('../models');


const createUser = async (req, res) => {
   console.log(req.body);
 // req.body, req.header, req.query, req.params
 try{ const createdUser = await user.findOne(req.body, { raw: true, include: { model: book } });
  console.log(createdUser);
  res.json({ success: true, message: 'finally api is working', data: createdUser });
}
catch(err){}

};

const deleteUser = async (req, res) =>{
  try {
    
    const success = await user.findByIdAndRemove(req.params.id);
    console.log(success);
 
     if (success) {
      res.status(204).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    
  }
}
 
/*const login = async (req, res) => {
 
};*/



const userController = {
  createUser, 
  deleteUser
};

module.exports = userController;