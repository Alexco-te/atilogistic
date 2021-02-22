const Servicio = require('../models/Servicio');
const {validationResult} = rquiere('express-validator');

exports.crearServicio = async (req, res) =>{

    try {
        // crear lista de empaque

        const Servicio = new (req.body);
        proyecto.creador = req.usuario.id;

        proyecto.save();
        res.json(Servicio);


    }catch (error){
            console.log(error)
            res.status(500).send('Hubo un error');
    }
} 

//obtiene todos los proyectos del usuario actual

exports.obtenerProyectos = async (req, res) => {
    try {
        const servicio = await Servicio.find({tipo_Servicio: req.usuario.id});
        res.json({servicio});
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error');
    }
}