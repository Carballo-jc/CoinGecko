const { Router } = require("express");
const { check } = require("express-validator");
const {
  getUsers,
  updateUser,
  createUsers,
  deleteUsers,
} = require("../controllers/userControlles");
const {

} = require("../helpers/validate-db");

const {
  validateInputs,
} = require("../middlewares");

const router = Router();

router.get("/", getUsers);
router.put(
  "/:id",
  [
    check("id", "No es un ID valido").isMongoId(),
    validateInputs,
  ],
  updateUser
);
router.post(
  "/",
  [
    check("userName", "El UserName es obligatorio").not().isEmpty(),
    check("password", "El password debe ser mas de 8 caracteres").isLength({
      min: 8,
    }),
    validateInputs,
  ],
  createUsers
);
router.delete(
  "/:id",
  [
    check("id", "No es un ID valido").isMongoId(),
    validateInputs,
  ],
  deleteUsers
);

module.exports = router;
