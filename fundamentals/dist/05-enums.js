var CourseType;
(function (CourseType) {
    CourseType["FREE"] = "FREE";
    CourseType["PREMIUM"] = "PREMIUM";
    CourseType["PRIVATE"] = "PRIVATE";
    CourseType["HIDDEN"] = "HIDDEN";
})(CourseType || (CourseType = {}));
const course = {
    title: "Typescript Bootcamp",
    type: CourseType.HIDDEN //This is of enum type, thay vì để sô 3, mình để CourseType.HIDDEN để code dễ đọc hơn
};
console.log("Course Type =", course); //sẽ in ra 3
export {};
