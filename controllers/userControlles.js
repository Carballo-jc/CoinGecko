const User = require("../models/user");
var bcrypt = require("bcryptjs");

exports.getUsers = async (req, res) => {

 const users = await User.find().populate('coins').populate({
   path:'coins.currency',
   model:'Coin'
 });
 res.json({
   msg:'GET Users',
   users
 })

 
};
exports.updateUser = async (req, res) => {
  const { password} = req.body;
  //validar contra la base de datos
  if (password) {
    //encriptar contraseña del
    const salt = bcrypt.genSaltSync();
    rest.password = bcrypt.hashSync(password, salt);
  }
  try {
    let user = await User.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    res.json({ msg: "User Updated", user });
  } catch (error) {
    console.log(error);
    res.status(301).json({msg:'Nose puedo actualizar el usuario'});
    next()
  }
};
exports.createUsers = async (req, res) => {
  const { name, lastName,userName, password } = req.body;
  const user = new User({ name, lastName,userName, password});
  //encriptar contraseña del
  const salt = bcrypt.genSaltSync();
  user.password = bcrypt.hashSync(password, salt);
  //gardar en la BD
  await user.save();
  res.status(201).json({
    msg: "POST create user API",
    user,
  });
};
exports.deleteUsers = async(req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);
  res.json({
    msg: "DELETE user API",
    user,
  });
};
