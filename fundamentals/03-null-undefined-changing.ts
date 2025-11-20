
let course = null

// const title = course.textField?.title ?? "No Title Found";

// console.log("title =" + title);

const title = course?.textField?.title ?? "No Title Found";
console.log (title)

if (course?.textField?.title) {
    console.log(`Title is ${course.textField.title}`);
}