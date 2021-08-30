const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../db/config');
const {PORT} = process.env;



class Server {

    constructor(){

        this.app = express();
        this.port = PORT;
        this.pathUsers = "/api/users";
        this.pathAuth = "/api/auth";
        this.pathCoin = "/api/coins"
        // DB connection
        this.connectionDB();
        //Middlewares
        this.middlewares();
        //rutas de mi aplicacion
        this.router();
    }

    async connectionDB(){
        await dbConnection()
    };
    middlewares(){
        //cors
        this.app.use(cors());
        //habilitar el parseo de los datos
        this.app.use(express.urlencoded({extended:true}));
        this.app.use(express.json());
    }

    router(){
        this.app.use(this.pathUsers,require('../routes/routerUsers'));
        this.app.use(this.pathAuth, require('../routes/routerAuth'));
        this.app.use(this.pathCoin, require('../routes/routerCoins'));
    };

    listen(){
        this.app.listen(this.port,()=>{
            console.log('Server corriendo en el puerto:',this.port);
        })
    };

};

module.exports= Server;