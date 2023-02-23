// functio declaration vs function expression
console.log(printBread(5));
function printBread(times){
    return "🍞".repeat(times);
}
//console.log(makeBread(5));
var makeBread = function(times){
    return "🍞".repeat(times);
}