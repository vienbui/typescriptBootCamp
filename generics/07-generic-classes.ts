
class KeyValue <K, V> {

    constructor(
        public readonly key:K,
        public readonly value:V) {
        }

    print () {
        console.log(`Key = ${this.key}, Value = ${this.value}`);
    }
    
}

const p1=new KeyValue("1", 100);
const val1 =p1.value;
const p2 = new KeyValue("2", "String value");
const val2 =p2.value;

const course:Course = {
    title: "TypeScript Generics",
    subtitle: "Learn TypeScript generics with practical examples",
    lessonsCount: 50
}

const p3 = new KeyValue("3", course);

const val3=p3.value