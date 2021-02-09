require ('dotenv').config();
const app = require('./server');


app.listen(app.get('port'),()=>{
    console.log ('Corre en ', app.get('port'))
})

