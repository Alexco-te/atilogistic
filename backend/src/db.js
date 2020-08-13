const mongoose = require ('mongoose');
const { ATI_MONGOHOST, ATI_MONGODB} = process.env;

const MONGO_URI = `mongodb://${ATI_MONGOHOST}/${ATI_MONGODB}`;
mongoose.connect(MONGO_URI,{
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true
    
})

.then(db => console.log('database is connected'))
.catch(err => console.log (err));