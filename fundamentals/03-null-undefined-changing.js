var _a, _b, _c;
var course = null;
// const title = course.textField?.title ?? "No Title Found";
// console.log("title =" + title);
var title = (_b = (_a = course === null || course === void 0 ? void 0 : course.textField) === null || _a === void 0 ? void 0 : _a.title) !== null && _b !== void 0 ? _b : "No Title Found";
console.log(title);
if ((_c = course === null || course === void 0 ? void 0 : course.textField) === null || _c === void 0 ? void 0 : _c.title) {
    console.log("Title is ".concat(course.textField.title));
}
