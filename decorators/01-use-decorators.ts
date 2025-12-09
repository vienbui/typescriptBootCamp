import { Log, LoggingLevel, Perf} from "./02-method-decorator";
import { SealClass } from "./03-class-decorator";

@SealClass()
class DbService {

    @Perf()
    @Log(LoggingLevel.DEBUG)
    saveData(data: any){
        console.log("saving data in the database");
    }
}

const db = new DbService();

db.saveData({hello:"World "})

/*
Object.defineProperty(DbService,"say hello",{
    value: () => {
        console.log("Hello World from DbService");
    }
})
    */