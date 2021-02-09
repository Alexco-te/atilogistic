const Usuario  = require ('../models/Usuario');
const jwt = require('jsonwebtoken');
const {validationResult}=require('express-validator')
const bcrypt = require ('bcryptjs')