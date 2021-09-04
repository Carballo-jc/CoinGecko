const { Router } = require("express");
const { check } = require("express-validator");
const userControlles = require("../controllers/userControlles");
const {validateJWT} = require('../middlewares/validate-jwt');
const {
  validateInputs,
} = require("../middlewares");

const router = Router();

router.get("/", userControlles.getUsers);
router.put(
  "/:id",
  [
    validateJWT,
    check("id", "No es un ID valido").isMongoId(),
    validateInputs,
  ],
  userControlles.updateUser
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
  userControlles.createUsers
);
router.post('/favorit/:id',[
  // validateJWT,
  // check("userName", "El UserName es obligatorio").not().isEmpty(),
  // validateInputs
],
userControlles.newFavoritCoin)
router.delete(
  "/:id",
  [
    check("id", "No es un ID valido").isMongoId(),
    validateInputs,
  ],
  userControlles.deleteUsers
);

module.exports = router;
