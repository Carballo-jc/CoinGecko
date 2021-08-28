const { Router } = require("express");
const { check } = require("express-validator");
const {
  getUsers,
  updateUser,
  createUsers,
  deleteUsers,
} = require("../controllers/userControlles");
const {

  // validateId,
} = require("../helpers/validate-db");

const {
  validateInputs,
  // validateJWT,
} = require("../middlewares");

const router = Router();

router.get("/", getUsers);
router.put(
  "/:id",
  [
    check("id", "No es un ID valido").isMongoId(),
    // check("id").custom((id) => validateId(id)),
    validateInputs,
  ],
  updateUser
);
router.post(
  "/",
  [
    check("UserName", "El UserName es obligatorio").not().isEmpty(),
    check("Password", "El password debe ser mas de 8 caracteres").isLength({
      min: 8,
    }),
    validateInputs,
  ],
  createUsers
);
router.delete(
  "/:id",
  [
    // validateJWT,
    check("id", "No es un ID valido").isMongoId(),
    // check("id").custom((id) => validateId(id)),
    validateInputs,
  ],
  deleteUsers
);

module.exports = router;
