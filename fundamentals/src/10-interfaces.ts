
//interface la custome object type
interface Course {
    readonly title: string; //readonly property
    subtitle: string;
    lessonCount: number;
    isPublished?: boolean; //optional property
}

const course: Course = {
    title: "Typescript Interfaces",
    subtitle: "Learn the language fundamentals",
    lessonCount: 15,
    isPublished: true
}

const otherCourse: Course = {
    title: "Typescript Interfaces 2",
    subtitle: "Learn the language fundamentals",
    lessonCount: 15,
    isPublished: true
}