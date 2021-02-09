const Usuario  = require ('../models/Usuario');
const {Roles} = require('../../roles');
const jwt = require('jsonwebtoken');
const {validationResult}=require('express-validator')


exports.crearUsuario = (async(req,res)=>{

    const errores = validationResult (req);
    if(!errores.isEmpty()){
            return res.status(400).json(
                {
                    errores:errores.array()
                }
            )
    }
    try {
        
        const permiso = Roles.can(req.body.role).createAny('usuario')
    
        if(permiso.granted){
            try{
                const{cc,nombre, apellido, email, usuario, password, role}=req.body
            
            let user
            const exist = await Usuario.findOne({cc});
                if(exist){
                    return res.status(250).json({erroMessage:'el cc es unico'})
                }
                
                const exist2 = await Usuario.findOne({usuario});
                if(exist2){
                    return res.status(250).json({erroMessage:'el usuario ya existe'})
                }
            user = new Usuario ({
                cc,
                nombre,
                apellido,
                email,
                usuario,
                password,
                role
            })
            
            user.password = await user.encryptPassword(user.password)
            await user.save()

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
            
            
            )} catch(error){
                console.log(error);
                res.status(500).send('Hubo un error')
            }
    
    }    
    } catch (error) {
            console.log(error);
            res.status(500).send ('No tiene permiso')
        
    }})


    exports.deleteUsuario =(async (req, res)=>{
        try {

            const permiso = Roles.can(req.body.role).deleteAny('usuario')

        if(permiso.granted){
            try {
    
                await Usuario.findByIdAndDelete(req.body.id)
                res.status(200).json({
                message:'El usuario fue eliminado'
                })
            } catch (error) {
                console.log(error);
                res.status(500).send('el usuario no existe')
            }

        }
            
        } catch (error) {
            console.log(error);
            res.status(500).send('No tiene permiso')
        }

    })