
let uniqueIdentifier: number | string =1000;

uniqueIdentifier = 12345;
console.log("Unique Identifier (number):", uniqueIdentifier);

uniqueIdentifier = "ABC12345";
console.log("Unique Identifier (string):", uniqueIdentifier);

// Function that accepts a union type
function displayId(id: number | string) {
    console.log("The ID is:", id);
}

displayId(67890);
displayId("XYZ67890");

// Example with arrays and union types
let mixedArray: (number | string)[] = [1, "two", 3, "four", 5];

console.log("Mixed Array:", mixedArray);


let courseId: number | null =1000;

courseId = null;