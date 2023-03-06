let arr = [45,23,11];
let a = arr.map((value, index, array)=>{
    console.log(value, index, array);
    // return value ;
    return value + index;

})
console.log(a);