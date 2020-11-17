const { user, book } = require('../models');

const createUser = async (req, res) => {
   
 // req.body, req.header, req.query, req.params
  try {//const createdUser = await user.findOne(req.body, { raw: true, include: { model: book } });
    //const createdUser = await user.findOne({where: {name: "Mike"}} );
    //const id = req.params.id;
    //const createdUser = await user.findOne({where: {id: id}} );
    const createdUser = await user.findOne(req.body);
    console.log(createdUser);
    res.json({ success: true, message: 'User created successfully', data: createdUser }); 
}
catch(err){
}

}; 

//////////////////////////////////////////////////////////////////////////
const deleteUser = async (req, res) =>{
  
    const id = req.params.id;
    const success = await user.destroy({
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
     message: 'User has been deleted successfully!'
});
}



const getUserDetails = async (req, res) =>{
  const userDetails = await book.findAll();
    if(!userDetails){
      return res.status(200).send({
      status: 404,
      message: 'No data found'
 });
 }
    res.status(200).send({
      status: 200,
      message: 'Data found!',
      data: userDetails
 });
 
 }

const login = async (req, res) => {
try{
  const { email, password } = req.params;
  user.findAll({
      
    where:{
        email: email,
        password: password
            
          }
  })
}catch(err){}
 
};



const userController = {
  createUser,
  deleteUser,
  getUserDetails,
  login
};

module.exports = userController;