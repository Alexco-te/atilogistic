
const mongoose = require ('mongoose');


const ServicioSchema = mongoose.Schema({

    NumGuia:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },

    tipo_Servicio:{
        type:Number,
        required:true
    },
    role:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Rol"
        }
    ]
  
},{timestamps : true})


module.exports = mongoose.model('Servicio', ServicioSchema)