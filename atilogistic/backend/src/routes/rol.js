const express = require ('express')
const router = express.Router ();
const rolcontroller = require('../controllers/rolcontroller')

router.post ('/',
    rolcontroller.crearRol
);

module.exports = router