const {Schema, model} = require ('mongoose')

const datoSchema = new Schema ({

    nombre:{
        type:String,
        require: true
    },
    apellido:{
        type:String,
        require: true
    },
    Cargo:{
        type:String,
        require: true
    },
    FechaNacimiento:{
        type: Date,
        require: true
    },
    FechaIngreso:{
        type: Date,
        require: true
    },
    FechaSalida:{
        type: Date,
        require: false
    },
    Gustos:{
        type: String,
        require: false
    }
}, {timestamps:true});

module.exports = model('Datos', datoSchema);
