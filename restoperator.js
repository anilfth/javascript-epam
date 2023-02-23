// REST OPERATOR
// sum = prompt("Enter a number");
 function sum(...inputs){
    console.log(...inputs); 
    console.log(inputs);
    let total=0;
    for( let i of inputs){
        total += i;
    }
    // return total;
    console.log(total);
 }
 sum(1,2,3,4,5,6);
// Another example of REST OPEARTOR
 function fun(a,b,...c){
    
 }