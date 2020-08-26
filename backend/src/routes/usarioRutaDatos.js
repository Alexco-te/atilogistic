const {Router} = require  ('express');
const router = Router ();
const Datos = require ('../models/Datos');
const User = require ('../models/user')

router.post("/datos", async (req, res)=>{
    try{
    let { nombre, apellido, cargo, fechaNacimiento, fechaIngreso, Gustos, usuario_id} =req.body;
    
        if (!nombre || !apellido || !cargo || !fechaNacimiento || !fechaIngreso ||!usuario_id)
            return res
            .status(400).json({ msg: "no se a ingresado los datos requeridos"});

        const newDatos = new Datos ({
                nombre,
                apellido,
                cargo, 
                fechaNacimiento,
                fechaIngreso,
                Gustos
        });
        const datosGuardados = await newDatos.save()
        res.json(datosGuardados);

        const usuarioid = usuario_id

        const usuarioActualizado = await User.findByIdAndUpdate (usuarioid, {
            Datos: datosGuardados._id
        });
        console.log(usuarioActualizado)
  

        } catch (err) {
         res.status(500).json({error: err.message});
     }
});
        module.exports = router;