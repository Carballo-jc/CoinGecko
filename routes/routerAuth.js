const { Router } = require("express");
const { check } = require("express-validator");
const authControllers= require("../controllers/authControllers");
const { validateInputs } = require("../middlewares");

const router = Router();

router.post(
  "/login",
  [
    check("userName", "El Usuario es obligatorio").not().isEmpty(),
    check("password", "La contraseña es obligatoria").not().isEmpty(),
    validateInputs,
  ],
  authControllers.authLogin
);

module.exports = router;
