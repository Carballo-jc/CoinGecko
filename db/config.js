const mongoose = require('mongoose');
const {MONGO_CONECT,DB_CONECT} = process.env

const dbConnection = async() =>{

    try {
     await   mongoose.connect('mongodb://localhost/restapis',{
         useNewUrlParser:true,
         useUnifiedTopology:true,
         useCreateIndex:true,
         useFindAndModify:false
     });
     console.log('Base de datos CONECTADA');
    } catch (error) {
        console.log(error);
        throw new Error('Error al iniciar la base de dato');
    }

}
module.exports={
    dbConnection
}