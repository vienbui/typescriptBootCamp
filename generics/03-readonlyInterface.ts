interface Course {
    title:string;
    subtitle:string;
    lessonsCount:number;  
}

// interface InmutableCourse {
//     readonly title:string;
//     readonly subtitle:string;
//     readonly lessonsCount:number;  
// }

function freezeCourse(course:Course): Readonly<Course>{
    return Object.freeze(course);
}

const frozen = freezeCourse({
    title: "Introduction to TypeScript",
    subtitle: "Learn the basics of TypeScript",
    lessonsCount: 100
})

// frozen.title = "New title"; // Error: Cannot assign to 'title' because it is a read-only property.