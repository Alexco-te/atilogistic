const {Schema, model}= require ('mongoose');

const userSchema = new Schema ({
    usuario: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    }

},{timestamps: true})

module.exports = model('Usuarios', userSchema);
