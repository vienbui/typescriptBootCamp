
class Course{

   private static TOTAL_COURSES = 0;
   static readonly TYPESCRIPT_TITLE = "TypeScript Basics";

    constructor(
       private _title:string,
       private price:number,
        private subtitle = "",
       private creationDate = new Date (2025,11,1)
    ) {

        this.validatePrice();
        Course.TOTAL_COURSES++;
       }
    
       validatePrice(){
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
        _title:string,
         subtitle = "",
        creationDate = new Date (2025,11,1)){
        super(_title,0,subtitle,creationDate);
       }
       validatePrice(){
                console.log("Called FreeCourse validatiePrice ()");
       }

    }

const typeScript = new Course(Course.TYPESCRIPT_TITLE, 100);

const angular = new FreeCourse(
    "Angular Basics" 
    );

    
  
console.log(typeScript.title);
console.log(angular.title);
// console.log(`Total courses: ${Course.TOTAL_COURSES}`);
console.log(angular)




