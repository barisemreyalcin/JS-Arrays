// 1. Create an array consists of "html, css, javascript, react"
let webArray = ["html", "css", "javascript", "react"];

// 2. How many elements are there in this array?
console.log(webArray.length);

// 3. Return first and last elements of the array
console.log(webArray[0]);
console.log(webArray[webArray.length - 1]);

// 4. Does webArray contains "html"?
console.log(webArray.includes("html"));
console.log(webArray.indexOf("html"));

// 5. Add "node.js" and "sql" to the end of the array with different ways
webArray[webArray.length] = "node.js";
webArray.push("sql");
console.log(webArray);

// 6. Delete the last 2 element of the array with different ways
webArray.pop();
webArray.splice(webArray.length - 1, 1);
console.log(webArray);

// 7. Store the data below in an array, and calculate the ages and average grade points of each students
    // Student 1: Baris Bey 2005 (70, 60, 80)
    // Student 2: Emre Bey 2004 (80, 80, 90)
    // Student 3: Yalcin Bey 2002 (60, 60, 70)

let student1 = [
    "Baris",
    "Bey",
    "2005",
    [70, 60, 80]
];

let student2 = [
    "Emre",
    "Bey",
    "2004",
    [80, 80, 90]
];

let student3 = [
    "Yalcin",
    "Bey",
    "2002",
    [60, 60, 70]
];

let students = [student1, student2, student3];

let s1_age = new Date().getFullYear() - students[0][2];
let s2_age = new Date().getFullYear() - students[1][2];
let s3_age = new Date().getFullYear() - students[2][2];

console.log(s1_age, s2_age, s3_age);

let s1_score = (students[0][3][0] + students[0][3][1] + students[0][3][2]) / 3;
let s2_score = (students[1][3][0] + students[1][3][1] + students[1][3][2]) / 3;
let s3_score = (students[2][3][0] + students[2][3][1] + students[2][3][2]) / 3;

console.log(s1_score.toFixed(1), s2_score.toFixed(1), s3_score.toFixed(1));