//In Js
// let id=5;

//In Ts
let id: number = 5; //Need to mention the type

console.log("ID:-",id);

//Basic types
let ids:number=5
let company:string="TCS"
let isSubscribed:boolean=true
let x:void //can be assigned any value but cannot be accessed
let nullValue:null=null
let undefinedValue:undefined=undefined

console.log(ids,company,isSubscribed,x,nullValue,undefinedValue);

//Arrays in TS
let numbers:[number,number,number]=[1,2,3];
console.log('Numbers',numbers);

//Tuple [immutable],cannot change order of elements
let person1 :[string,number]=["John",30];
console.log('Person',person1);

let person2:[number,string,boolean]=[3,'Chitresh',true];
console.log('Persons',person2);


//Tuple array
let employee:[number,string][];

employee=[[48,'Father'],[46,'Mother'],[27,'Me'],[26,'Sister']];
console.log('Employee',employee)

for (let i=0 ;i<employee.length;i++) {
    console.log(`Name-${employee[i][1]} Age- ${employee[i][0]}`);
}

//Unions
let pid:string | number
pid='27'
console.log('PID',pid);
//pid:27

//Intersection
let fullname:{firstName: string , lastName: string};
fullname={firstName:"Chitresh",lastName:"Pal"}
console.log("Full Name",fullname);

//Type Inference
let autoDetect = "Hello World";
console.log(autoDetect);

function getLength(input: string | Array<any>): number{
  if(typeof input === 'string') return input.length;
  else return input.length;
}

console.log(getLength(autoDetect));

//Functions
function logInfo() :void{
   let name:string='Chitresh';
   let age:number=25;
   console.log(`Hi I am ${name},I am ${age}+ years old`);
}

logInfo();

//Object
let person: {name:string,age?:number,gender?:string};
person={name:'Chitresh',age:25};
console.log('Person',person);

//Null and Undefined
let uninitalizedVar;
console.log('uninitialized Var ',uninitalizedVar)

let notDefined:undefined=undefined;
if (notDefined===undefined){
    console.log('Value is undefined');
}else{
    console.log('value is not undefined');
}

let nullVal:null=null;
if (nullVal===null){
    console.log('Value is Null');
}else{
    console.log('value is not Null');
}

//Type Assertion
let someInput = "This is a String";
if(typeof someInput==="string"){
    console.log("It's string");
}else if(Array.isArray(someInput)){
    console.log("It's an array");
}else{
    console.log("Unknown type");
}

let strLength=(<string>someInput).length;
console.log("String Length ",strLength);

//Union Type
let age: number | string = '25';
if(typeof age === "number"){
   let yearOld=parseInt(age as any)+" years old";  
   console.log("I am "+yearOld);  
} else{
  let birthYear= parseInt((age as any),10)+" born";
  console.log("I was born in "+birthYear);
}

//Interface
interface Person {
    firstName: string,
    lastName: string,
    age?: number
};
const johnDoe:Person={
    firstName:"John",
    lastName:"Doe",
    age:34
};
console.log(`${johnDoe.
    firstName} ${johnDoe.
        lastName}. He is ${johnDoe
            .age} years old.`);

//Enumarations
enum color{red,green,blue}
console.log('Color',color);

let c:color=color.green
console.log('Color Value',c);

//Objects
let obj={names:"John",age:30};
console.log('Object',obj);

let names=obj.names;
console.log('Name',names);

//Arrays
let nums:number[]=[1,2,3,4,5,6];
let arr:any[]=[1,'Nice',true];

//Type Assertion
let username=(document.querySelector("#username") as HTMLInputElement).value;
console.log('Username',username);

interface User{
    name: string,
    age?: number,
    country?: string
}
function greet(user:User){
    console.log("Hello "+ user.name + "!");
    if (user.age){
        console.log("You are " + user.age+ " years old.");
    }
    if (user.country){
        console.log("You are from " + user.country);
    }
}
greet({name: "John"});
greet({name: "Jane", age: 23});
greet({name: "Joe", age: 19, country: "USA"});
