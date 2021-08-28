const User = require("../models/user");

const validateToken = async (id) => {
  //verificar si el correo existe el
  const existeUserId = await User.findById(id);
  if (!existeUserId) {
    throw new Error(`El ID no esta registrado: ${id}`);
  }
};
module.exports = { validateToken };
