"use strict"
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('./routers/router');
const server = require('./server');

class Launcher {
    constructor(port, _serverInstance) {
        this.port = port;
        this.hostname = 'localhost';
        this.server = _serverInstance.expressApp;
        this.launchServer();
    };
    launchServer() {
        this.server.listen(this.port, this.hostname, ( err )=> {
            if ( err ) {
                return console.log(err);
            } else {
                return console.log(`Server is running at port ${this.port}`);
            }
        });
    }
}
exports.Launcher = Launcher;

const routerInstance = new router.Router();
const serverInstance = new server.Server(routerInstance);
const launcherInstance = new Launcher(7000, serverInstance);

console.log('launcher.js log',this);
    