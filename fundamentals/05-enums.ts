
enum CourseType {
    FREE = "FREE",
    PREMIUM = "PREMIUM",
    PRIVATE = "PRIVATE",
    HIDDEN = "HIDDEN"  
}

const course = {
    title: "Typescript Bootcamp",
    type: CourseType.HIDDEN //This is of enum type, thay vì để sô 3, mình để CourseType.HIDDEN để code dễ đọc hơn
}

console.log("Course Type =", course); //sẽ in ra 3