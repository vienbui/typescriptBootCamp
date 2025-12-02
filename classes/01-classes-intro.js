var Course = /** @class */ (function () {
    function Course(_title, subtitle, creationDate) {
        this._title = _title;
        this.subtitle = subtitle;
        this.creationDate = creationDate;
        Course.TOTAL_COURSES++;
    }
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
    return Course;
}());
var typeScript = new Course("TypeScript Basics", "Learn the basics of TypeScript", new Date(2025, 11, 2));
var angular = new Course("Angular Basics", "Learn the basics of Angular", new Date(2025, 10, 15));
console.log(typeScript.title);
console.log(angular.title);
console.log("Total courses: ".concat(Course.TOTAL_COURSES));
