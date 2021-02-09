const Usuario  = require ('../models/Usuario');
const jwt = require('jsonwebtoken');
const {validationResult}=require('express-validator')
const bcrypt = require ('bcryptjs')

exports.auth = (async (req, res)=>{
    const errores = validationResult (req);
    if(!errores.isEmpty()){
        res.status(400).json({errores:errores.array()})
    }
    try {

        const {usuario, password}=req.body;

        let user

        user = await Usuario.findOne({usuario})
        if(!user){
            res.status(400).json({msg:'no existe el usuario'})
        }

        const passAccep = await bcrypt.compare(password, user.password)
        if(!passAccep){
            res.status(400).json({msg:'password no valido'})
        }
        const payload = {
            user:{
                id:user.id
            }
        }

        jwt.sign (payload, process.env.JWT,{
            expiresIn: '1d'
        },(error, token)=>{
            if(error) throw error;

            res.json({
            auth:'true',
            token
        })

            }
        )
        
    } catch (error) {
        console.log(error)
    
    }

})