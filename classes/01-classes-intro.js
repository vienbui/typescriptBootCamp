var Course = /** @class */ (function () {
    // title!:string
    // subtitle:string;
    // creationDate: Date;
    function Course(_title, subtitle, creationDate) {
        this._title = _title;
        this.subtitle = subtitle;
        this.creationDate = creationDate;
    }
    Object.defineProperty(Course.prototype, "title", {
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
    return Course;
}());
var course = new Course("TypeScript Basics", "Learn the basics of TypeScript", new Date(2025, 11, 2));
course.title = "Advanced TypeScript";
console.log(course.age);
console.log(course);
