const bcrypt = require("bcryptjs");
const { generateJWT } = require("../helpers/generate-jwt");
const User = require("../models/user");

exports.authLogin = async (req, res) => {
  const { userName, password } = req.body;

  try {
    const user = await User.findOne({ userName });
    //verificar el userName
    if (!user) {
      return res.status(400).json({
        msg: "Username and Password not Found - UserName",
      });
    }
  
    //verificar la contraseña de
    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) {
      return res.status(400).json({
        msg: "Username and Password not Found - Password",
      });
    }
    //generar el JWT
    const token = await generateJWT(user.id);

    res.json({
      msg: "POST login",
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "contact the administrator",
    });
  }
};

