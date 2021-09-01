const { Router } = require("express");
const { check } = require("express-validator");
const coinsControllers = require('../controllers/coinsControllers');
const {validateJWT} = require('../middlewares/validate-jwt');

const router = Router();

router.get('/',
[
    validateJWT,
    check('userName','El nombre es obligatorio').not().isEmpty(),
],
coinsControllers.getCoins);

module.exports = router;