
const Course ={
     title:"TS learning",
    subtitle:"Learn TS generics, build practical projects";
    lessonsCount:100

}

// type CourseKeys = "title" | "subtitle" | "lessonsCount"; //cach cu


type CourseKeys = keyof typeof Course; //cach moi su dung keyof

export function extractProperty <T, K extends keyof T> (data: T, property: K){
    return data[property]

}

const val = extractProperty(Course, "title"); // OK
const val2 = extractProperty(Course, "unknown"); // Error: Argument of type '"unknown"' is not assignable to parameter of type 'CourseKeys2'.