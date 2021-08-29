const jwt = require("jsonwebtoken");
const SECRETKEY = process.env;


exports.generateJWT = (uid = "") => {
  return new Promise((resolve, reject) => {
    const payload = { uid };
    jwt.sign(
      payload,
      `${SECRETKEY}`,
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
