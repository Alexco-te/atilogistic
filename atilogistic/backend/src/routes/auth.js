const express = require ('express')
const router = express.Router ();
const {check} = require('express-validator');
const authcontroller = require ('../controllers/authcontroller')


router.post ('/',
[
    check('usuario','Agrege un usuario').not().isEmpty()
],
    authcontroller.auth
);

module.exports = router