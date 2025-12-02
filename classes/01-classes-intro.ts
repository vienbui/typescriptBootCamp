
class Course{

    // title!:string
    // subtitle:string;
    // creationDate: Date;

    constructor(
       private _title:string,
        private subtitle:string,
       private creationDate: Date
    ) {

       }
    
   set title(newTitle:string){
        if(!newTitle){
            throw new Error("Title cannot be empty");
        }
        this._title = newTitle;
   }

    get age () {
        const ageInMs = new Date().getTime() - this.creationDate.getTime();
        return ageInMs / 1000/60/24;
    }

}
const course = new Course(
        "TypeScript Basics", 
        "Learn the basics of TypeScript", 
        new Date(2025,11,2));
    
course.title = "Advanced TypeScript";    
console.log(course.age);
console.log(course);

