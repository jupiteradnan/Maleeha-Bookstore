const model = require('../models');

const createUser = async (req, res) => {
// req.body, req.header, req.query, req.params
  try{
    let user = req.body;
    const createdUser = await model.user.create(user);
    //console.log(createdUser)
    res.json({ success: true, message: 'User created successfully', data:user }); 
    return createUser;
}
  catch(err){
  throw err;
}
}; 


const deleteUser = async (req, res) =>{
  
  const id = req.params.id;
  const success = await model.user.destroy({
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
  let userDetails = await model.user.findAll();
    if(!userDetails){
      return res.status(200).send({
      status: 404,
      message: 'No data found'
 });
 
  }
      return res.status(200).send({
      status: 200,
      message: 'Data found!',
      data: userDetails
 });
 
 }

const login = async (req, res) => {
try{
  
  const email = req.params.email;
  const password = req.params.password;
  const user = model.user.findOne({
      
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


const myUser =  model.book.create({ name: "Sara",
username: "Sara1",
email: "sara@gmail.com",
password: "test1",
address: "abc" 
});

console.log(myUser.getBooks());
console.log(myUser.countBooks());
console.log(myUser.hasBooks(myUser));

//console.log(myUser.setBooks());
//console.log(myUser.addBooks());
//console.log(myUser.removeBooks());




const userController = {
  createUser,
  deleteUser,
  getUserDetails,
  login,
  

};

module.exports = userController;