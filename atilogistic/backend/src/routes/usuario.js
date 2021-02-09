const express = require ('express')
const router = express.Router ();
const usercontroller = require('../controllers/usercontroller')
const {check} = require('express-validator')
router.post ('/',
[
    check('cc','El # de CC').not().isEmpty(),
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('apellido','El apellido es obligatorio').not().isEmpty(),
    check('email','El email es obligatorio').not().isEmpty(),
    check('email','Ingresa un email valido').isEmail(),
    check('usuario','El usuario es obligatorio').not().isEmpty(),
    check('password','El password  es obligatorio').not().isEmpty(),
    check('password','El password debe ser > a 6 caracteres').isLength({min: 6}),
    check('rol','El rol es obligatorio').not().isEmpty()
],
    usercontroller.crearUsuario
);

router.delete('/',
    usercontroller.deleteUsuario
)

module.exports = router