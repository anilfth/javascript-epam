var a = 20;
console.log(a);
function f1(){
    console.log("inside a function", a);
}
f1();
// // //  var declare with function only scope
// function f2(){
//     var b = 30;
//     console.log("b is inside function", b);
// }
// f2();
// console.log("B outside functon",b);
// // // we can  re declare a variable with var
//  var a = 40;
//  console.log(a);
//    a = 60;
//  console.log(a);
// //  // LET IS BLOCK SCOPE
//   let  a1 = 50;
//   function f3(){
//     console.log(a1)
//   }
//   f3();
//   // block scoped llet example
//   function foo(){
//     if(true){
//         let z = 100;
//         console.log("z is outside if", z);
//     }
//     console.log("z is outside if",z);
//   }
//   foo();
//   let m1 = 100;
// // let m1 = 200;
// // You can reassin some value to a variable
// let m2 = 10;
// m2 = 100;
// // const
// const s = 100;
// console.log(s);
// // s = 200;
// // console.log(s);
// const obj = {
// id : 101,
// name : 'Ajay'
// };
// console.log(obj.id);
// obj.id = 105;
// console.log(obj.id);