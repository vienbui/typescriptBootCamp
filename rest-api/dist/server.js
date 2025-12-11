"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var root_1 = require("./routes/root");
var app = express();
function setupExpress() {
    app.route("/").get(root_1.root);
}
function startServer() {
    app.listen(9000, function () {
        console.log('v1 HTTP REST API server is now running at http://localhost:9000');
    });
}
;
setupExpress();
startServer();
