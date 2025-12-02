"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseService = void 0;
var CourseService = /** @class */ (function () {
    function CourseService() {
        console.log("The CourseService was initiablized");
    }
    CourseService.instance = function () {
        if (!CourseService.INSTANCE) {
            CourseService.INSTANCE = new CourseService();
        }
        return CourseService.INSTANCE;
    };
    return CourseService;
}());
exports.CourseService = CourseService;
