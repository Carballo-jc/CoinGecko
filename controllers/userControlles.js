const User = require("../models/user");
var bcrypt = require("bcryptjs");
const Coins = require("../models/Coins");

exports.getUsers = async (req, res) => {

 const users = await User.find({}).populate('coins.currency',{name:1,symbol:1,image:1,current_price:1});

 res.json({
   msg:'GET Users',
   users
 })

 
};
exports.updateUser = async (req, res,next) => {
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
exports.newFavoritCoin = async(req,res,next) =>{
  const id = req.params.id
       const {userName,coin} = req.body;
      //  console.log(coin);
       const user = await User.findById(id);
      //  console.log(user)
      //  const currency = await Coins.findById(coin)
      //  console.log(currency)
       if(!user){
           return res.status(400).json({msg:'Usuario no existe'})
       }
       let newCoin = new Coins(coin);
       try {
            await newCoin.save()
           user.coins = user.coins.concat(newCoin);
            await user.save()
           res.json({msg:'se agrego correctamente',newCoin})
       } catch (error) {
           next(error)
       }
}   
    

