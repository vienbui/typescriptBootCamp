var Course = /** @class */ (function () {
    // title!:string
    // subtitle:string;
    // creationDate: Date;
    function Course(title, subtitle, creationDate) {
        this.title = title;
        this.subtitle = subtitle;
        this.creationDate = creationDate;
    }
    Object.defineProperty(Course.prototype, "age", {
        get: function () {
            var ageInMs = new Date().getTime() - this.creationDate.getTime();
            return ageInMs / 1000 / 60 / 24;
        },
        enumerable: false,
        configurable: true
    });
    return Course;
}());
var course = new Course("TypeScript Basics", "Learn the basics of TypeScript", new Date(2025, 12, 2));
console.log(course.age);
