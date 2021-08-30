const mongoose = require('mongoose');
const {MONGO_CONECT,DB_CONECT} = process.env

exports.dbConnection = async() =>{

    try {
     await   mongoose.connect(`${MONGO_CONECT}${DB_CONECT}`,{
         useNewUrlParser:true,
         useUnifiedTopology:true,
         useCreateIndex:true,
         useFindAndModify:false
     });
     console.log('Data Base Conected');
    } catch (error) {
        console.log(error);
        throw new Error('Error to initial Data Base');
    }

}
