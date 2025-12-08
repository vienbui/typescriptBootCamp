
interface Course {
    title:string;
    subtitle:string;
    lessonsCount:number;  
}

export function freezeCourse(course:Course): Readonly<Course>{
    return Object.freeze(course);
}

function freezeLesson(lesson:Lesson): Readonly<Lesson>{
    return Object.freeze(lesson);
}

function freeze<T> (input: T): Readonly<T>{
    return Object.freeze(input);
}

const course: Course = {
 title: "Introduction to TypeScript",
    subtitle: "Learn the basics of TypeScript",
    lessonsCount: 100
}

const frozenCourse = freeze(course)

interface Lesson {
    title:string;
    seqNo:number
}

const frozenLesson = freeze<Lesson>({
    title: "Lesson 1: Introduction",
    seqNo: 10
})