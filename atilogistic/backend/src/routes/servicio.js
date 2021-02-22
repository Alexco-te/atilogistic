const express = rquire('express');
const router=express.Router();
const ServicioController = require('../controllers/ServicioController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');

router.post('/',
auth,
[
    check('nombre','el numero de la guia es obligatorio').not().isEmpty()
],
ServicioController.crearServicio

);
router.get('/',
auth,
ServicioController.obtenerProyectos
);

module.exports=router;

