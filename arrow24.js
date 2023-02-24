const fun1 = () => { console.log("Hello");}
const fun2 = ()  => { console.log("Hello");}
const fun3 = (a , b)  => {console.log(a);}

 //An empty arrow function returns undefined
 const empty = () => {};
 (() => "foobar")();
 //returns "foobar"
 //(this is IIFE(immediately invoked function expression))
 const simple = (a) => (a > 15 ? 15 : a);
 simple(16); //15
 simple(10);   //10
 const max = (a,b) => (a > b ? a : b);
 // Easy array filtering mapping etc.
 const arr = [5,6,13,0,1,18,23];
 const sum = arr.reduce((a,b) => a + b);
 //66
 const even = arr.filter((v) => v % 2 === 0)
 //[6, 0 18]
 const double = arr.map((v) => v *2);
 //[10,12,26,0,2,36,46]