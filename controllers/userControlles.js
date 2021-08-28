const User = require("../models/user");
var bcrypt = require("bcryptjs");

const getUsers = async (req, res) => {

 const users = await User.find({});
 res.json({
   msg:'GET Users',
   users
 })

 
};
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { _id, password, ...rest } = req.body;
  //validar contra la base de datos
  if (password) {
    //encriptar contraseña del
    const salt = bcrypt.genSaltSync();
    rest.password = bcrypt.hashSync(password, salt);
  }
  const user = await User.findByIdAndUpdate(id, rest);
  res.json({
    msg:'User Update',
    user
  });
};
const createUsers = async (req, res) => {
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
const deleteUsers = async(req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);
  res.json({
    msg: "DELETE user API",
    user,
  });
};
module.exports = {
  getUsers,
  updateUser,
  createUsers,
  deleteUsers,
};
