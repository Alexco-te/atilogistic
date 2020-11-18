const express = require ('express');
require('dotenv').config();
const cors = require ('cors');
require ('./db')


//Initializations
const app = express ();
app.use(express.json());
app.use(cors ())

//settings
app.set('port', process.env.PORT || 3002)

//Middlewares

//Global variables

//Routes

app.use ('/usuario', require('./routes/usuarioRutaRegistro'));
app.use ('/usuario', require('./routes/usuarioRutaLogin'));
app.use ('/usuario', require('./routes/usuarioRutaDelete'));
app.use ('/usuario', require('./routes/usuarioRutaGeToken'));
app.use ('/usuario', require('./routes/usuarioRutaUsuario'));
app.use ('/usuario', require('./routes/usarioRutaDatos'));
app.use ('/usuario', require('./routes/usuarioRutaPrueba'));


module.exports = app;