const mongoose = require ('mongoose')
const {ATI_MONGOHOST, ATI_MONGODB} = process.env

const URI =`mongodb://${ATI_MONGOHOST}/${ATI_MONGODB}`


const conectar = async ()=>{
    try{
        await mongoose.connect(URI,{
            useNewUrlParser: true,
            useFindAndModify:true,
            useUnifiedTopology:true,
            useCreateIndex:true
    })
        console.log('DB esta conectada')
} catch (error){
        console.log(error)
        process.exit(1)
    }
}

conectar ();
