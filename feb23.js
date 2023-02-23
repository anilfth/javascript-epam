// Demostration of REST operator
// function justPrint(a, b, ...args){
// console.log("a is:", a);
// console.log("b is:",b);
// console.log("args:",args);
// }
// justPrint("Hello","wework",8,9,5,6,7);
// // another  example of REST operator
//  function sum(...theArgs){
//     let total = 0;
//     for(const arg of theArgs){
//         total += arg;

//     }
//     return total;
//  }
//  console.log(sum(1,2,3));
// //  expected output==6
// console.log(sum(4,5,6));

// Spread opeartor in javascript
// let a01 = [2,3,4,5];
// let a02 = [4,5,6,8];
// console.log("Without spread:",[a01,a02]);
// console.log("with spread:", [...a01, ...a02]);

// // An example of call back function
// function firstFunc(callback){
//     callback();
// }
// let arr10 = ['first','second','Third']
// firstFunc(function printArray(arr10){
// console.log("Printing some massage");
// });
// function greeting(name) {
//     alert(`Hello, ${name}`);
//   }
  
//   function processUserInput(callback) {
//     const name = prompt("Please enter your name.");
//     callback(name);
//   }
  
//   processUserInput(greeting);
   
