"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _03_singleon_1 = require("./03-singleon");
var Course = /** @class */ (function () {
    function Course(id, _title, price, subtitle, creationDate) {
        if (subtitle === void 0) { subtitle = ""; }
        if (creationDate === void 0) { creationDate = new Date(2025, 11, 1); }
        this.id = id;
        this._title = _title;
        this.price = price;
        this.subtitle = subtitle;
        this.creationDate = creationDate;
        this.validatePrice();
        var service = _03_singleon_1.CourseService.instance();
        Course.TOTAL_COURSES++;
    }
    Course.prototype.printId = function () {
        console.log("Course ID is: ".concat(this.id));
    };
    Course.prototype.validatePrice = function () {
        console.log("Called Course validatiePrice ()");
        if (this.price <= 0) {
            throw "Price must be larger than 0";
        }
    };
    Course.printTitle = function (course) {
        console.log("This course title is: ".concat(course._title));
    };
    Object.defineProperty(Course.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (newTitle) {
            if (!newTitle) {
                throw new Error("Title cannot be empty");
            }
            this._title = newTitle;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "age", {
        get: function () {
            var ageInMs = new Date().getTime() - this.creationDate.getTime();
            return ageInMs / 1000 / 60 / 24;
        },
        enumerable: false,
        configurable: true
    });
    Course.TOTAL_COURSES = 0;
    Course.TYPESCRIPT_TITLE = "TypeScript Basics";
    return Course;
}());
var FreeCourse = /** @class */ (function (_super) {
    __extends(FreeCourse, _super);
    function FreeCourse(id, title, subtitle, creationDate) {
        if (subtitle === void 0) { subtitle = ""; }
        if (creationDate === void 0) { creationDate = new Date(2025, 11, 1); }
        return _super.call(this, id, title, 0, subtitle, creationDate) || this;
    }
    FreeCourse.prototype.validatePrice = function () {
        console.log("Called FreeCourse validatiePrice ()");
    };
    return FreeCourse;
}(Course));
// const typeScript = new Course(Course.TYPESCRIPT_TITLE, 100);
var angular = new FreeCourse("1", "Angular Basics");
_03_singleon_1.CourseService.instance();
// console.log(typeScript.title);
console.log(angular.title);
// console.log(`Total courses: ${Course.TOTAL_COURSES}`);
console.log(angular);
