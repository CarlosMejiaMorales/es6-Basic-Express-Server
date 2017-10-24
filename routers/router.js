"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _routerExpress = require('express');
class Router {
    constructor() {
        this.RouterB = _routerExpress.Router();
        this.setRouters();
    }
    setRouters() {
        this.RouterB.get('/', this.getAllData);
    }
    getAllData(req, res, next) {
        res.json({
            verb: "get",
            uri: '/Secondary',
            status: 'success'
        })
    }

}
exports.Router = Router;
console.log('router.js log', this);