const model = require('../models');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("../config/authConfig");

  const createUser = async (req, res) => {
    try{
    let user = req.body;
    //const createdUser = await model.user.create(user);
    const createdUser = await model.user.create({

      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 5),
      address: req.body.address
    })

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

    const email = req.body.email;
  const password = req.body.password;
  const user = await model.user.findOne({where: { email: email},

  });


    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!"
      });
    }

    const token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 86400 // 24 hours
    });

    res.json({
        token: token
    })



  };



 /* if(!user){
    return res.status(200).send({
    status: 404,
    message: 'Cannot login!'});
                           
          }

  else{
     res.status(200).send({
     status: 200,
     message: 'User logged in successfully!',
   });
  }  */
  
 /* }catch(err){
  throw err;
}
 */


const userController = {
  createUser,
  deleteUser,
    listAllUsers,
  login
  

};

module.exports = userController;