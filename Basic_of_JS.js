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

// Simple array
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits);
console.log(fruits[0]); 
console.log(fruits[1]);

// ***Types of creating array***
// 1) Using Square Brackets ([])
let number1 = [1, 2, 3, 4, 5];

// 2) Using Array() Constructor
let numbers1 = new Array(1, 2, 3, 4, 5);

//  3) Creating an Empty Array
let emptyArray = [];

//  4)  2015  es6     var  let  const  arrow function async 
// Using Array.of() (ES6)
let arr = Array.of(1, 2, 3);
console.log(arr); 

// 5) Using Array.from() to Create Array from Iterable
let str = "hello";
let chars = Array.from(str);
console.log(chars); 

// ***Accessing Array Elements****
let numb = [10, 20, 30, 40];
console.log(numb[0]); 
console.log(numb[2]); 


// ***Modify Elements***
let num= [10, 20, 30];
num[1] = 50; 
console.log(num); 

// ***Methods of Array*** //
// push() - Add Element at the End
let fruit = ["Apple", "Banana"];
fruit.push("Mango");
console.log(fruit);

// pop() - Remove Element from the End
let fru1 = ["Apple", "Banana", "Mango"];
let removed = fru1.pop();
console.log(fru1); 
console.log(removed); 

// unshift() - Add Element at the Beginning
let fruit1 = ["Banana", "Mango"];
fruits.unshift("Apple");
console.log(fruit1); 

// shift() - Remove Element from the Beginning
let fruit2 = ["Apple", "Banana", "Mango"];
let remove = fruit2.shift();
console.log(fruits); 
console.log(remove); 


// length - Get Array Length
let fruit3 = ["Apple", "Banana", "Mango"];
console.log(fruit3.length); // Output: 3

// indexOf() - Find Index of Element
let fruit4 = ["Apple", "Banana", "Mango"];
console.log(fruit4.indexOf("Banana")); 
console.log(fruit4.indexOf("Grapes")); 

// includes() - Check if an Element Exists
let fruit5 = ["Apple", "Banana", "Mango"];
console.log(fruit5.includes("Mango")); 
console.log(fruit5.includes("Grapes")); 

// slice() - Extract Portion of Array
let fruit6 = ["Apple", "Banana", "Mango", "Grapes"];
let sliced = fruit6.slice(1, 3);
console.log(sliced); 
console.log(fruit6); 

// splice() - Add/Remove Elements
let fruit7 = ["Apple", "Banana", "Mango", "Grapes"];
fruits.splice(1, 2); 
console.log(fruit7); 

// Add Elements
let fruit8 = ["Apple", "Grapes"];
fruits.splice(1, 0, "Banana", "Mango");
console.log(fruit8); 

// join() - Convert Array to String
let fruit9 = ["Apple", "Banana", "Mango"];
let result = fruit9.join(", ");
console.log(result); 

// concat() - Merge Arrays
let fruit10 = ["Apple", "Banana"];
let vegetables = ["Carrot", "Potato"];
let merged = fruit10.concat(vegetables);
console.log(merged); 

// reverse() - Reverse the Array
let fruit11 = ["Apple", "Banana", "Mango"];
fruit11.reverse();
console.log(fruit11); 

// sort() - Sort the Array
let fruit12 = ["Mango", "Apple", "Banana"];
fruits.sort();
console.log(fruit12);

// map() - Transform Array
let number2 = [1, 2, 3, 4];
let squared = number2.map(num => num * num);
console.log(squared); 
// let sqrt = numbers.map(function(num){
// return num*num;
// })
//  console.log(sqrt);
 




// filter() - Filter Array Based on Condition
let number3 = [1, 2, 3, 4, 5];
let even = number3.filter(num => num % 2 === 0);
console.log(even);



// reduce() - Reduce Array to Single Value
let number4 = [1, 2, 3, 4];
let sum = number4.reduce((acc, curr) => acc + curr, 0);
console.log(sum); 
// let sums =  numbers.reduce((acc,cuure)=>{
//    return acc + curr;
// })
// console.log(sums );



// forEach() - Iterate Over Array

let fruits2 = ["Apple", "Banana", "Mango"];
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});


// find() - Find First Matching Element
let number5 = [1, 2, 3, 4, 5];
let firstEven = number5.find(num => num % 2 === 0);
console.log(firstEven); // Output: 2


// findIndex() - Find Index of First Matching Element
let number6 = [1, 2, 3, 4, 5];
let index = number6.findIndex(num => num % 2 === 0);
console.log(index); // Output: 1

// some() - Check If Any Element Matches
let number7 = [1, 3, 5];
let hasEven = number7.some(num => num % 2 === 0);
console.log(hasEven); // Output: false


// every() - Check If All Elements Match
let no1 = [2, 4, 6];
let allEven = no1.every(num => num % 2 === 0);
console.log(allEven); 


//******* Examples ******//

let tasks = ["Buy groceries", "Study JavaScript", "Clean room"];
tasks.push("Complete project");
tasks.pop();
tasks.forEach((task, index) => {
console.log(`${index + 1}. ${task}`);
});


let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 }
  ];
  let olderUsers = users.filter(user => user.age > 25);
  console.log(olderUsers);


































// for(let i=20;i>0;i--){
//     console.log(i);
    
// }

// sum=0
// for(let i=1;i<=100;i++){
//     if(i%2==0){
//         sum+=i
//         }
//     }console.log(sum);


    