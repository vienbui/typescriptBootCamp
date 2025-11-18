
// primitive types: number
const lessonCount =10;

const total = lessonCount + 10;

console.log("total =", total);

// primitive types: string
let title = "Typescript";

let subtitle = "Learn the basics of Typescript"

const fullTitle = title + ": " + subtitle;

const fullTitle2 = `Full Title - ${title}: ${subtitle}`;

const greeting = `Welcome to ${fullTitle}!`;

console.log("fullTitle =", fullTitle);
console.log("greeting =", greeting);
console.log(fullTitle2);


// primitive types: boolean
let published = false;

if (published) {
    console.log("The lesson is published.");
}

// primitive types: Object
let course = {
    title:"Typescript",
    subtitle:"Learn the basics of Typescript",
    lessonCount:10,
    //nested object
    author:{
        firstName:"John",
        lastName:"Doe"
    }
}


console.log("type of course is" + typeof course);
// console.log("course =", course);
console.log("author:", course.author.firstName + " " + course.author.lastName   );


