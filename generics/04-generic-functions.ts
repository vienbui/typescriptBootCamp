
interface Course {
    title:string;
    subtitle:string;
    lessonsCount:number;  
}

export function freezeCourse(course:Course): Readonly<Course>{
    return Object.freeze(course);
}

interface Lesson {
    title:string;
    seqNo:number
}

function freezeLesson(lesson:Lesson): Readonly<Lesson>{
    return Object.freeze(lesson);
}