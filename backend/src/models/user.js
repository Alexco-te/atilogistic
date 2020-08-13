const {Schema, model}= require ('mongoose');

const userSchema = new Schema ({
    usuario: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    nombreUsuario: {
        type: String
    },
    rol: {
        type: String,
        default: 'operario2',
        enum: ["operario1","operario2","admin","superadmin"]
    }

},{timestamps: true})

module.exports = model('Usuarios', userSchema);
