const {Router} = require  ('express');
const router = Router ();
const bcrypt = require ('bcryptjs');
const User = require ('../models/user')

router.post("/registro", async (req, res)=>{
    try{
    let { usuario, password, passwordCheck, nombreUsuario, rol, estado} =req.body;
    
    //validaciones
        if (!usuario || !password || !passwordCheck || !rol || !estado)
            return res
            .status(400).json({ msg: "no se a ingresado los datos requeridos"});
        if (password.length < 5)
            return res
            .status(400).json({ msg: "la contrasena debe tener mas de cinco caracteres"});
        if (password !== passwordCheck)
            return res
            .status(400).json({ msg: "ingrese el password dos veces para verificacion"});
        const usuarioExiste = await User.findOne ({usuario: usuario});
           if (usuarioExiste)
            return res
            .status(400)
            .json({msg: "ya existe la cuenta"});
        if(!nombreUsuario) nombreUsuario = usuario;
        
        const salt = await bcrypt.genSalt(15);
        const passwordHash = await bcrypt.hash (password,salt); 

        const newUser = new User ({
            usuario,
            password: passwordHash,
            nombreUsuario, 
            rol,
            estado
        });

        const usuarioGuardado = await newUser.save()
        res.json(usuarioGuardado)

        } catch (err) {
         res.status(500).json({error: err.message});
     }
});
        module.exports = router;