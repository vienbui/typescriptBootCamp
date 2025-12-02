
const title = "Typescript Literal Types";
const lessonCount = 10;

let pageSize: 10 | 20 | 30 = 10;

pageSize = 20; // valid
// pageSize = 25; // invalid

let courseStatus: "draft" | "published" | "archived" = "draft";
