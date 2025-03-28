// printing in JS
console.log("Hi I am a Coder");
console.log("Hello,Everyone");
console.log('What are doing');

// Variables
var a=5;      //declare
var a=1000;       //allow redeclare and reassign 
console.log(a);

let myName="Sayali Shelar"  //declare
myName="Queen03"            //allow only reassign not redeclare
console.log(myName);

const pi=3.14;     
console.log(pi);        //don't allow both reassign and redeclare

// Datatypes
let A=768;
let b=45.76;
let c=-89
console.log(typeof(A));            // number
console.log(typeof(b));
console.log(typeof(c));

let city="karad";
let state='maharashtra'
let num="98478963948"               
console.log(typeof(city));              //string
console.log(typeof(state));
console.log(typeof(num));

let isCollege=true;
let isflower=false;                       //Boolean
console.log(typeof(isCollege));
console.log(typeof(isflower));

let n;
console.log(typeof(n));          //undefind

let q=null;
console.log(typeof(q));        //null

let x=BigInt("123")
console.log(x);                     //Bigint
console.log(typeof(x));
             

let p=Symbol("Hello")
console.log(p);                //symbol
console.log(typeof(p));


//  Operator
// 1) Arithmetic 
let i=8;
let j=4;
console.log(i+j);
console.log(i-j);
console.log(i*j);
console.log(i/j);
console.log(i%j);
console.log(i**j);

// 2)Logical
let m=10;
let o=20;
console.log(m && o);
console.log(m || o);
console.log(!(m && o));

// 3)Assignment
let s=50;
let z=5;
console.log(s+=z);
console.log(s-=z);
console.log(s*=z);
console.log(s/=z);
console.log(s%=z);

// 4)Comparison
let num1=55;
let num2=60;
console.log(num1==num2);
console.log(num1!=num2);
console.log(num1>=num2);
console.log(num1<=num2);
console.log(num1>num2);
console.log(num1<num2);

let num3=123;
let num4="123";
console.log(num3===num4);
console.log(num3!==num4);

// Control Structure
 // 1) If
 let age=18;
 if(age>=18){
    console.log("You can Vote");
 }

 // 2) If-else
 let age1=8;
 if(age1>=18){
    console.log("You can Vote");
 }else{
    console.log("You can't Vote");
}

// 3) Else if
let score = 85;
if (score <= 50) {
    console.log("Grade: C");
} else if (score >= 51 && score <=80) {
    console.log("Grade: B");
} else if(score >= 81 && score <=90){
    console.log("Grade: A");
} else {
    console.log("Grade : A+");
    
}

// Function
function greet() {
    console.log("Hello, welcome to the JavaScript course!");
}
greet();


function greetUser(name) {
    console.log("Hello, " + name + "!");
}
greetUser("Sayali");



function add(a, b) {
    return a + b; 
}
let result = add(5, 10);  // Calls the function and stores the result in `result`
console.log(result);   


const sayGoodbye = function() {
    console.log("Goodbye!");
};
sayGoodbye(); 


// Example of an arrow function:
const multiply = (a, b) => a * b; 
console.log(multiply(4, 5));  


// Example of function scope:
let globalVar = "I am global";
function checkScope() {
    let localVar = "I am local";
    console.log(globalVar);  // Accessible here (global scope)
    console.log(localVar);   // Accessible here (local scope)
}



// Array 

let arr=[1,2,3,"Sayali",undefined,true]
console.log(arr);


// Switch
let day=3
switch(day){
    case (2&&3):
    console.log("monday");
    break;
    case (4&&5):
        console.log("friday");
        break;
        default:
            console.log("invalid");
            break;
            }


// for loop
for (let i = 1; i <= 5; i++) {
    console.log("Iteration number: " + i);
}

// while loop
let counter = 1;
while (counter <= 3) {
    console.log("Counter is: " + counter);
    counter++;
}

// do-while
let number1 = 1;

do {
    console.log("Number is: " + number1);
    number1++;
} while (number1 < 3);


// practice program
let num1 = 10;
let num2 = 20;
let operation = "+";

if (operation === "+") {
    console.log("Result: " + (num1 + num2));
} else if (operation === "-") {
    console.log("Result: " + (num1 - num2));
} else if (operation === "*") {
    console.log("Result: " + (num1 * num2));
} else if (operation === "/") {
    if (num2 !== 0) {
        console.log("Result: " + (num1 / num2));
    } else {
        console.log("Division by zero is not allowed.");
    }
} else {
    console.log("Invalid operation.");
}




let number = -5;
if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}


let num = 10;
if (num % 2 === 0) {
    console.log(num + " is an even number.");
} else {
    console.log(num + " is an odd number.");
}


let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}


let tempCelsius = 30;
if (tempCelsius < 0) {
    console.log("It's freezing!");
} else if (tempCelsius >= 0 && tempCelsius <= 20) {
    console.log("It's cold.");
} else if (tempCelsius > 20 && tempCelsius <= 30) {
    console.log("It's warm.");
} else {
    console.log("It's hot.");
}




let char = 'E';

if (char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U' ||
    char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    console.log(char + " is a vowel.");
} else {
    console.log(char + " is a consonant.");
}


































// for(let i=20;i>0;i--){
//     console.log(i);
    
// }

// sum=0
// for(let i=1;i<=100;i++){
//     if(i%2==0){
//         sum+=i
//         }
//     }console.log(sum);


    