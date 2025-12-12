"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
var result = dotenv.config();
if (result.error) {
    console.log('Error loading environment variables from .env file, aborting...');
    process.exit(1);
}
console.log(process.env.PORT);
var express = require("express");
var root_1 = require("./routes/root");
var ultils_1 = require("./ultils");
var app = express();
function setupExpress() {
    app.route("/").get(root_1.root);
}
function startServer() {
    var port;
    var portEnv = process.env.PORT;
    var portArg = process.argv[2];
    if ((0, ultils_1.isInteger)(portEnv)) {
        port = parseInt(portEnv);
    }
    if (!port && (0, ultils_1.isInteger)(portArg)) { // neu chua co port tu env thi kiem tra arg
        port = parseInt(portArg);
    }
    if (!port) {
        port = 9000;
    }
    app.listen(port, function () {
        console.log("v1 HTTP REST API server is now running at http://localhost:".concat(port));
    });
}
;
setupExpress();
startServer();
