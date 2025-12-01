type CourseStatus = "draft" | "published" | "archived";

let courseStatus: CourseStatus = "draft"; 

let newStatus: CourseStatus = "published";

type Course = {
    title: string;
    subtitle: string;
    lessonCount: number;
}

let course: Course = {
    title: "Typescript Type Aliases",
    subtitle: "Learn the language fundamentals",
    lessonCount: 12,
}