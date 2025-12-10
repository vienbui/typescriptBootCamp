"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const _02_method_decorator_1 = require("./02-method-decorator");
const _03_class_decorator_1 = require("./03-class-decorator");
const _04_property_decorator_1 = require("./04-property-decorator");
let DbService = class DbService {
    saveData(data) {
        console.log("saving data in the database");
    }
};
__decorate([
    (0, _02_method_decorator_1.Perf)(),
    (0, _02_method_decorator_1.Log)(_02_method_decorator_1.LoggingLevel.DEBUG)
], DbService.prototype, "saveData", null);
DbService = __decorate([
    (0, _03_class_decorator_1.SealClass)()
], DbService);
const db = new DbService();
// db.saveData({hello:"World "})
// lesson 92 - Class Decorators
/*
Object.defineProperty(DbService,"say hello",{
    value: () => {
        console.log("Hello World from DbService");
    }
})
    */
// lesson 93 - Property Decorators
class Course {
    constructor(title) {
        this.title = title;
    }
    print(message) {
        console.log(`${message}: Course ${this.title}, id: (${this.id})`);
    }
}
__decorate([
    (0, _04_property_decorator_1.DatabaseId)()
], Course.prototype, "id", void 0);
const course1 = new Course("Typescript Basics");
console.log('Course 1 ID:', course1.id);
const course2 = new Course("Angular core Basics");
console.log('Course 2 ID:', course2.id);
console.log("Course 1:", course1);
console.log("Course 2:", course2);
