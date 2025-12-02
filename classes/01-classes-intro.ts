
class Course{

   static TOTAL_COURSES = 0;

    constructor(
       private _title:string,
        private subtitle:string,
       private creationDate: Date
    ) {

        Course.TOTAL_COURSES++;
       }
    

    get title(){
        return this._title;
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
const typeScript = new Course(
        "TypeScript Basics", 
        "Learn the basics of TypeScript", 
        new Date(2025,11,2));

const angular = new Course(
    "Angular Basics", 
    "Learn the basics of Angular", 
    new Date(2025,10,15));

    
  
console.log(typeScript.title);
console.log(angular.title);
console.log(`Total courses: ${Course.TOTAL_COURSES}`);

