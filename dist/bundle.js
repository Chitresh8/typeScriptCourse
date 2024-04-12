"use strict";
//In Js
// let id=5;
//In Ts
let id = 5; //Need to mention the type
console.log("ID:-", id);
//Basic types
let ids = 5;
let company = "TCS";
let isSubscribed = true;
let x; //can be assigned any value but cannot be accessed
let nullValue = null;
let undefinedValue = undefined;
console.log(ids, company, isSubscribed, x, nullValue, undefinedValue);
//Arrays in TS
let numbers = [1, 2, 3];
console.log('Numbers', numbers);
//Tuple [immutable],cannot change order of elements
let person1 = ["John", 30];
console.log('Person', person1);
let person2 = [3, 'Chitresh', true];
console.log('Persons', person2);
//Tuple array
let employee;
employee = [[48, 'Father'], [46, 'Mother'], [27, 'Me'], [26, 'Sister']];
console.log('Employee', employee);
for (let i = 0; i < employee.length; i++) {
    console.log(`Name-${employee[i][1]} Age- ${employee[i][0]}`);
}
//Unions
let pid;
pid = '27';
console.log('PID', pid);
//pid:27
//Intersection
let fullname;
fullname = { firstName: "Chitresh", lastName: "Pal" };
console.log("Full Name", fullname);
//Type Inference
let autoDetect = "Hello World";
console.log(autoDetect);
function getLength(input) {
    if (typeof input === 'string')
        return input.length;
    else
        return input.length;
}
console.log(getLength(autoDetect));
//Functions
function logInfo() {
    let name = 'Chitresh';
    let age = 25;
    console.log(`Hi I am ${name},I am ${age}+ years old`);
}
logInfo();
//Object
let person;
person = { name: 'Chitresh', age: 25 };
console.log('Person', person);
//Null and Undefined
let uninitalizedVar;
console.log('uninitialized Var ', uninitalizedVar);
let notDefined = undefined;
if (notDefined === undefined) {
    console.log('Value is undefined');
}
else {
    console.log('value is not undefined');
}
let nullVal = null;
if (nullVal === null) {
    console.log('Value is Null');
}
else {
    console.log('value is not Null');
}
//Type Assertion
let someInput = "This is a String";
if (typeof someInput === "string") {
    console.log("It's string");
}
else if (Array.isArray(someInput)) {
    console.log("It's an array");
}
else {
    console.log("Unknown type");
}
let strLength = someInput.length;
console.log("String Length ", strLength);
//Union Type
let age = '25';
if (typeof age === "number") {
    let yearOld = parseInt(age) + " years old";
    console.log("I am " + yearOld);
}
else {
    let birthYear = parseInt(age, 10) + " born";
    console.log("I was born in " + birthYear);
}
;
const johnDoe = {
    firstName: "John",
    lastName: "Doe",
    age: 34
};
console.log(`${johnDoe.
    firstName} ${johnDoe.
    lastName}. He is ${johnDoe
    .age} years old.`);
//Enumarations
var color;
//Enumarations
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["green"] = 1] = "green";
    color[color["blue"] = 2] = "blue";
})(color || (color = {}));
console.log('Color', color);
let c = color.green;
console.log('Color Value', c);
//Objects
let obj = { names: "John", age: 30 };
console.log('Object', obj);
let names = obj.names;
console.log('Name', names);
//Arrays
let nums = [1, 2, 3, 4, 5, 6];
let arr = [1, 'Nice', true];
//Type Assertion
let username = document.querySelector("#username").value;
console.log('Username', username);
function greet(user) {
    console.log("Hello " + user.name + "!");
    if (user.age) {
        console.log("You are " + user.age + " years old.");
    }
    if (user.country) {
        console.log("You are from " + user.country);
    }
}
greet({ name: "John" });
greet({ name: "Jane", age: 23 });
greet({ name: "Joe", age: 19, country: "USA" });
