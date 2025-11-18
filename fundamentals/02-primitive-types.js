// primitive types: number
var lessonCount = 10;
var total = lessonCount + 10;
console.log("total =", total);
// primitive types: string
var title = "Typescript";
var subtitle = "Learn the basics of Typescript";
var fullTitle = title + ": " + subtitle;
var fullTitle2 = "Full Title - ".concat(title, ": ").concat(subtitle);
var greeting = "Welcome to ".concat(fullTitle, "!");
console.log("fullTitle =", fullTitle);
console.log("greeting =", greeting);
console.log(fullTitle2);
// primitive types: boolean
var published = false;
if (published) {
    console.log("The lesson is published.");
}
// primitive types: Object
var course = {
    title: "Typescript",
    subtitle: "Learn the basics of Typescript",
    lessonCount: 10,
};
console.log("type of course is" + typeof course);
