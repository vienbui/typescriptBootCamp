
export interface Course {
    title:string;
    subtitle:string;
    lessonsCount:number;
   
}

// export interface CourseUpdate {
//     title?:string;
//     subtitle?:string;
//     lessonsCount?:number;
// }


// cach 1: su dung giao dien, tao doi tuong truyen vao
// nhung cach nay khoong tot vi redandant code
// export function updateCourse(){
//     courseId:string, update:CourseUpdate{

//     }
// }


export function updateCourse(
    courseId:string, update:Partial<Course>) {

    }

updateCourse("1", {
    title: "New version of title",
});

updateCourse("1", {
    subtitle: "New version of subtitle"
});

updateCourse("1", {
    title: "New version of title",
    lessonsCount: 100
});