import { Log, LoggingLevel, Perf} from "./02-method-decorator";

class DbService {

    @Perf()
    @Log(LoggingLevel.DEBUG)
    saveData(data: any){
        console.log("saving data in the database");
    }
}

const db = new DbService();

db.saveData({hello:"World "})