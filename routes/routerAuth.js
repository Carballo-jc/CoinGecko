const { Router } = require("express");
const { check } = require("express-validator");
const { authLogin } = require("../controllers/authControllers");
const { validateInputs } = require("../middlewares/validate-input");

const router = Router();

router.post(
  "/login",
  [
    check("UserName", "El Usuario es obligatorio").not().isEmpty(),
    check("password", "La contraseña es obligatoria").not().isEmpty(),
    validateInputs,
  ],
  authLogin
);

module.exports = router;
