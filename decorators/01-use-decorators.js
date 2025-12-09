"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const _02_method_decorator_1 = require("./02-method-decorator");
class DbService {
    saveData(data) {
        console.log("saving data in the database");
    }
}
__decorate([
    (0, _02_method_decorator_1.Perf)(),
    (0, _02_method_decorator_1.Log)(_02_method_decorator_1.LoggingLevel.DEBUG)
], DbService.prototype, "saveData", null);
const db = new DbService();
db.saveData({ hello: "World " });
