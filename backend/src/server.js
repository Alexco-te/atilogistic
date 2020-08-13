const express = require ('express');
require('dotenv').config();
const cors = require ('cors');
require ('./db')


//Initializations
const app = express ();
app.use(express.json());
app.use(cors ())

//settings
app.set('port', process.env.PORT || 4000)

//Middlewares

//Global variables

//Routes


module.exports = app;