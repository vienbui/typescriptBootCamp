import { Log, LoggingLevel, Perf} from "./02-method-decorator";
import { SealClass } from "./03-class-decorator";
import { DatabaseId } from "./04-property-decorator";

@SealClass()
class DbService {

    @Perf()
    @Log(LoggingLevel.DEBUG)
    saveData(data: any){
        console.log("saving data in the database");
    }
}

const db = new DbService();

// db.saveData({hello:"World "})

// lesson 92 - Class Decorators
/*
Object.defineProperty(DbService,"say hello",{
    value: () => {
        console.log("Hello World from DbService");
    }
})
    */

// lesson 93 - Property Decorators
class Course {
    @DatabaseId()
    id!: string;
    title: string;
    
    constructor (title: string){
        
        this.title = title;
    }

    print(message:string){
        console.log(`${message}: Course ${this.title}, id: (${this.id})`)
    }
}

const course1 = new Course("Typescript Basics");

console.log('Course 1 ID:',course1.id);

const course2 = new Course("Angular core Basics");

console.log('Course 2 ID:',course2.id);

console.log("Course 1:", course1);
console.log("Course 2:", course2);