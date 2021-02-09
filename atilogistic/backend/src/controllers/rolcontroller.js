const Rol  = require ('../models/Rol')

exports.crearRol = (async(req,res)=>{
    try{
        const{rol, level}=req.body
      
    let rol1
        const exist = await Rol.findOne({rol});

        if(exist){
            return res.status(250).json({erroMessage:'el Rol ya existe'})
        }
        
      rol1 = new Rol ({
          rol,
          level
      })
      
      await rol1.save()

      res.send ('registro exitoso')

    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error')
    }
})