const express = require ('express')
const app = express();
require ('./ db');
require ('./models/Rol')


app.use(express.json({extende:true}))

app.set('port', process.env.PORT || 4001)

app.use ('/api/usuarios', require('./routes/usuario'))
app.use ('/api/rol', require('./routes/rol'))
app.use ('/api/auth', require('./routes/auth'))



module.exports = app;


