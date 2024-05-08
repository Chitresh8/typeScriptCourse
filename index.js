//In Js
// let id=5;
//In Ts
var id = 5; //Need to mention the type
console.log("ID:-", id);
//------------------------------------------------------------------------------------------------------------------
//Basic types
var ids = 5;
var company = "TCS";
var isSubscribed = true;
var x; //can be assigned any value but cannot be accessed
var nullValue = null;
var undefinedValue = undefined;
console.log(ids, company, isSubscribed, x, nullValue, undefinedValue);
//------------------------------------------------------------------------------------------------------------------
//Arrays in TS
var numbers = [1, 2, 3];
console.log('Numbers', numbers);
//Arrays
var nums = [1, 2, 3, 4, 5, 6];
var arr = [1, 'Nice', true];
var list = [1, 2, 3];
//------------------------------------------------------------------------------------------------------------------
//Tuple [immutable],cannot change order of elements (No.of elements in an array [any type that should be in order ex:- string,number in an array it should declare the same])
var person1 = ["John", 30];
console.log('Person', person1);
var person2 = [3, 'Chitresh', true];
console.log('Persons', person2);
//------------------------------------------------------------------------------------------------------------------
//Tuple array
var employee;
employee = [[48, 'Father'], [46, 'Mother'], [27, 'Me'], [26, 'Sister']];
console.log('Employee', employee);
for (var i = 0; i < employee.length; i++) {
    console.log("Name-".concat(employee[i][1], " Age- ").concat(employee[i][0]));
}
//------------------------------------------------------------------------------------------------------------------
//Unions
var pid;
pid = '27';
console.log('PID', pid);
//pid:27
//Union Type
var age = '25';
if (typeof age === "number") {
    var yearOld = parseInt(age) + " years old";
    console.log("I am " + yearOld);
}
else {
    var birthYear = parseInt(age, 10) + " born";
    console.log("I was born in " + birthYear);
}
//------------------------------------------------------------------------------------------------------------------
//Intersection
var fullname;
fullname = { firstName: "Chitresh", lastName: "Pal" };
console.log("Full Name", fullname);
//------------------------------------------------------------------------------------------------------------------
//Type Inference
var autoDetect = "Hello World";
console.log(autoDetect);
function getLength(input) {
    if (typeof input === 'string')
        return input.length;
    else
        return input.length;
}
console.log(getLength(autoDetect));
;
var johnDoe = {
    firstName: "John",
    lastName: "Doe",
    age: 34
};
console.log("".concat(johnDoe.
    firstName, " ").concat(johnDoe.
    lastName, ". He is ").concat(johnDoe
    .age, " years old."));
var user2 = {
    id: 1,
    name: 'ChitreshBabu',
};
var add = function (x, y) { return x + y; };
var sub = function (x, y) { return x - y; };
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var combineName = {
    firstName: 'ChitreshBabu',
    lastName: 'Alavuru'
};
fullName(combineName);
function totalName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: 'Roman',
    lastName: 'Reigns',
};
totalName(p);
//---------------------------------------------------------------------------------------------------------------------------------------------
//Functions
function logInfo() {
    var name = 'Chitresh';
    var age = 25;
    console.log("Hi I am ".concat(name, ",I am ").concat(age, "+ years old"));
}
logInfo();
function addNum(x, y) {
    return x + y;
}
addNum(1, 2);
//------------------------------------------------------------------------------------------------------------------
//Object
var person;
person = { name: 'Chitresh', age: 25 };
console.log('Person', person);
var user = {
    id: 1,
    name: 'Chitresh'
};
//Objects
var obj = { names: "John", age: 30 };
console.log('Object', obj);
var names = obj.names;
console.log('Name', names);
//------------------------------------------------------------------------------------------------------------------
//Null and Undefined
var uninitalizedVar;
console.log('uninitialized Var ', uninitalizedVar);
var notDefined = undefined;
if (notDefined === undefined) {
    console.log('Value is undefined');
}
else {
    console.log('value is not undefined');
}
var nullVal = null;
if (nullVal === null) {
    console.log('Value is Null');
}
else {
    console.log('value is not Null');
}
//------------------------------------------------------------------------------------------------------------------
//Type Assertion
var someInput = "This is a String";
if (typeof someInput === "string") {
    console.log("It's string");
}
else if (Array.isArray(someInput)) {
    console.log("It's an array");
}
else {
    console.log("Unknown type");
}
var strLength = someInput.length;
console.log("String Length ", strLength);
var cid = 1;
var customerId = cid; //or let customerId=<number>cid
//Another method
//let customerId=cid as number
customerId = true; //It will show error because customerId is having number not boolean.
//Type Assertion
var username = document.querySelector("#username").value;
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
//------------------------------------------------------------------------------------------------------------------
//Enumarations==>enum
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["green"] = 1] = "green";
    color[color["blue"] = 2] = "blue";
})(color || (color = {}));
console.log('Color', color);
var c = color.green;
console.log('Color Value', c);
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up); //output=>1
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Up); //Output=>Up
//-----------------------------------------------------------------------------------------------------------------------------------------------
//Void
function log(message) {
    console.log(message);
}
log('Chit'); //No error because we passed string or number parameters
// log(3); No error
//----------------------------------------------------------------------------------------------------------------------------------------------
//classes 
var Ezeiatech = /** @class */ (function () {
    function Ezeiatech(name) {
        console.log("Good Morning ".concat(this.ceo));
    }
    Ezeiatech.prototype.greet = function () {
        console.log("Good Morning ".concat(this.ceo));
    };
    return Ezeiatech;
}());
