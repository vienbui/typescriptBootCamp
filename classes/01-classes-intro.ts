import type { HasId, HasTitle } from "./02-interfaces";
import { CourseService } from "./03-singleon";

abstract class Course implements HasTitle {

   private static TOTAL_COURSES = 0;
   static readonly TYPESCRIPT_TITLE = "TypeScript Basics";

    constructor(
        public id:string,
       protected  _title:string,
       protected price:number,
        protected subtitle = "",
       protected creationDate = new Date (2025,11,1)
    ) {

        this.validatePrice();

        const service = CourseService.instance();

        Course.TOTAL_COURSES++;
       }

       printId() {
        console.log(`Course ID is: ${this.id}`);
       }
    
       protected  validatePrice(){
        console.log("Called Course validatiePrice ()");
        if(this.price <= 0){
            throw "Price must be larger than 0"
        }
       }

       static printTitle(course: Course){
        console.log(`This course title is: ${course._title}`);
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

class FreeCourse extends Course {
     constructor(
        id:string,
        title:string,
        subtitle = "",
        creationDate = new Date (2025,11,1)){
        super(id, title,0,subtitle,creationDate);
       }
       validatePrice(){
                console.log("Called FreeCourse validatiePrice ()");
       }

    }

// const typeScript = new Course(Course.TYPESCRIPT_TITLE, 100);

const angular = new FreeCourse("1", "Angular Basics");

  CourseService.instance();
  
// console.log(typeScript.title);
console.log(angular.title);
// console.log(`Total courses: ${Course.TOTAL_COURSES}`);
console.log(angular)




