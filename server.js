"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const express = require('express');
const bodyParser =  require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

class Server {
    constructor(_routerInstance) {
        this.confObj = { rootPath: '/', secPath: '/sec', staticFiles: '/public' };
        this.routerB = _routerInstance.RouterB;
        this.expressApp = express();
        this.setMiddleWare();
        this.setRoutes();
    }
    setMiddleWare() {
        this.expressApp.use(express.static(__dirname + this.confObj.staticFiles));
        // use JSON from parser middleware
        this.expressApp.use(bodyParser.json());
        // use query string parser middleware
        this.expressApp.use(bodyParser.urlencoded({
            extended: true
        }));
        // use cookie parser middleware
        this.expressApp.use(cookieParser(`SECRET GOES HERE`));
        // use morgan dev
        this.expressApp.use(morgan('dev'));
    }
    setRoutes() {
        const mainRouter = express.Router();
        mainRouter.route('/getSample')
            .get((req, res, next) => {
            res.json({
                message: 'hello mucker'
            });
        });
        this.expressApp.use(this.confObj.rootPath, mainRouter);
        this.expressApp.use(this.confObj.secPath, this.routerB);
    }
}
exports.Server = Server;

console.log('server.js log:', this);