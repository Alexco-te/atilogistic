const {Router} = require  ('express');
const router = Router ();
const bcrypt = require ('bcryptjs');
const User = require ('../models/user');
const jwt = require ('jsonwebtoken')

router.post("/logeo", async (req, res) => {
    try {
        const {usuario, password}= req.body;

        //validaciones
        
        if (!usuario || !password)
            return res.status (400).json({msg:"ingresar usuario y contrasena"});
        
        const user = await User.findOne ({usuario: usuario});
        if (!usuario)
            return res
                .status (400)
                .json({msg:"No existe el usuario"});

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch)
           return res
                .status (400)
                .json({msg:"Credenciales incorrectas"});

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
        res.json({
            token,
            user: {
                id: user._id,
                usuario: user.usuario,
                nombreUsuario: user.nombreUsuario,
                rol: user.rol
            }
        })
    }  catch (err) {
                res.status(500).json({error: err.message});
        }
});

module.exports = router