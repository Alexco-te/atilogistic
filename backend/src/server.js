const express = require ('express');
require('dotenv').config();
const cors = require ('cors');
require ('./db')


//Initializations
const app = express ();
app.use(express.json());
app.use(cors ())

//settings
app.set('port', process.env.PORT || 3000)

//Middlewares

//Global variables

//Routes

app.use ('/usuario', require('./routes/usuarioRutaRegistro'));
app.use ('/usuario', require('./routes/usuarioRutaLogin'))

module.exports = app;