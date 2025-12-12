
import * as dotenv from "dotenv";

const result = dotenv.config();

if (result.error) {
    console.log('Error loading environment variables from .env file, aborting...');
    process.exit(1);
}

console.log(process.env.PORT)

import * as express from 'express';
import { root } from './routes/root';
import { isInteger } from './ultils';

const app = express();

function setupExpress(){
    app.route ("/").get(root);
}

function startServer() {
    let port:number ;

    const portEnv = process.env.PORT
    const portArg = process.argv[2];

    if (isInteger(portEnv)) {
        port = parseInt(portEnv!);
    }
  
    if (!port && isInteger(portArg)) { // neu chua co port tu env thi kiem tra arg
        port = parseInt(portArg!);
    }

    if (!port) {
        port = 9000;
    }

    app.listen(port, () => {
        console.log(`v1 HTTP REST API server is now running at http://localhost:${port}`)
    })
};

setupExpress();


startServer();