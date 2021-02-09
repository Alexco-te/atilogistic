const mongoose = require ('mongoose');
const bcrypt = require ('bcryptjs')

const UsuarioSchema = mongoose.Schema({
    cc:{
        type:Number,
        required:true,
        unique:true,
        trim:true
    },
    nombre:{
        type:String,
        required:true
    },
    apellido:{
        type:String,
        required:true
    },
    usuario:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:false
    },
    password:{
        type:String,
        required:true
    },
    role:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Rol"
        }
    ]
},{timestamps : true})

UsuarioSchema.methods.encryptPassword = async (password)=>{
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);

}


module.exports = mongoose.model('Usuario', UsuarioSchema)