const jwt = require("jsonwebtoken");

const generateJWT = (id = "") => {
  return new Promise((resolve, reject) => {
    const payload = { username, password };
    jwt.sign(
      payload,
      process.env.SECRETKEY,
      {
        expiresIn: "2h",
      },
      (error, token) => {
        if (error) {
          console.log(error);
          reject("no se pudo generar el token");
        } else {
          resolve(token);
        }
      }
    );
  });
};
module.exports = {
  generateJWT,
};
