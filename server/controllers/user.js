const model = require('../models');

  const createUser = async (req, res) => {
    try{
    let user = req.body;
    const createdUser = await model.user.create(user);
    console.log('just testing it out -----------------------------', await createdUser.getBooks());
    res.json({ success: true, message: 'User created successfully', data:createdUser });
    return createUser;
}

  catch(err){
  throw err;
}
}; 


const deleteUser = async (req, res) => {

    const id = req.params.id;
    const success = await model.user.destroy({
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
        message: 'User has been deleted successfully!' });

          }
}


const listAllUsers = async (req, res) =>{
  let users = await model.user.findAll();
    if(!users){
      return res.status(200).send({
      status: 404,
      message: 'No data found' });

 
  }
     else{
         return res.status(200).send({
            status: 200,
            message: 'Data found!',
            data: users });
     }
 
 }

const login = async (req, res) => {
try{
  
  const email = req.body.email;
  const password = req.body.password;
  const user = await model.user.findOne({
      
    where:{
        email: email,
        password: password
          }
  })

  if(!user){
    return res.status(200).send({
    status: 404,
    message: 'Cannot login!'});
                           
          }

  else{
     res.status(200).send({
     status: 200,
     message: 'User logged in successfully!',
   });
  }
  
  }catch(err){
  throw err;
}
 
};

const userController = {
  createUser,
  deleteUser,
    listAllUsers,
  login
  

};

module.exports = userController;