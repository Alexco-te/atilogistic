const mongoose = require ('mongoose');

const RolSchema = mongoose.Schema({
    rol:{
        type:String,
        required:true,
        unique:true
    },
    level:{
        type:String,
        trim:true
    }
},{timestamps: true})
 
module.exports = mongoose.model('Rol', RolSchema);