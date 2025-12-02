class Course {
    _title;
    subtitle;
    creationDate;
    // title!:string
    // subtitle:string;
    // creationDate: Date;
    constructor(_title, subtitle, creationDate) {
        this._title = _title;
        this.subtitle = subtitle;
        this.creationDate = creationDate;
    }
    get title() {
        return this._title;
    }
    set title(newTitle) {
        if (!newTitle) {
            throw new Error("Title cannot be empty");
        }
        this._title = newTitle;
    }
    get age() {
        const ageInMs = new Date().getTime() - this.creationDate.getTime();
        return ageInMs / 1000 / 60 / 24;
    }
}
const typeScript = new Course("TypeScript Basics", "Learn the basics of TypeScript", new Date(2025, 11, 2));
const angular = new Course("Angular Basics", "Learn the basics of Angular", new Date(2025, 10, 15));
console.log(typeScript.title);
console.log(angular.title);
export {};
