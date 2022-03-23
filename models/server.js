const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';

        this.middlewares();
        this.routes();
    }

    middlewares() {
        //CORS
        this.app.use(cors());

        //Serializa la informacion que venga a formato json
        this.app.use(express.json());

        //Directorio público
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usersPath, require('../routes/users'));
    }

    listen() {
        this.app.listen(this.port, () =>  { 
            console.log(`Servidor corriendo en puerto: ${this.port}`);
        });
    }
}

module.exports = Server;