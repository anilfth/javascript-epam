    // question 1
// using reverse function ///
const reverseNumber = (num) => {
    let Reverse = num.toString().split("").reverse().join("");
    if (Reverse.endsWith("-")) {
      Reverse = "-" + Reverse.slice(0, -1); //slicing off the negative sign at the end 
      return parseInt(Reverse);
    } else {
      return parseInt(Reverse);
    }
  }
  
  console.log(reverseNumber(123456)); // Output: 65432  

//  method 1
function reverseNumber(num) {
    let Reverse = num.toString().split("").reverse().join("");
    if (Reverse.endsWith("-")) {
      Reverse = "-" + Reverse.slice(0, -1); //slicing off the negative sign at the end 
      return parseInt(Reverse);
    } else {
      return parseInt(Reverse);
    }
  }
  
  console.log(reverseNumber(123456)); // Output: 654321

                                             //   method 2

function reverseNumber(num) {
    let sign = Math.sign(num);// to obtain the sign of the input number num and store it in the variable sign
    // Math.abs()--> to reverse the number without the sign.
    // split the absolute value of num into an array of digits using .split(''), 
    // reverse the array using .reverse(), 
    //  join the array back into a string using .join('') to obtain the reversed number as a string.
    let reverse = Math.abs(num).toString().split('').reverse().join('');
    return parseInt(reverse) * sign;
  }
  
  console.log(reverseNumber(123456)); // Output: 654321
  console.log(reverseNumber(-123456)); // Output: -654321

                                         //   question2 

                                         // method 1 using while llops 
function forEach(arr, func) {
    // for (let i = 0; i < arr.length; i++) {
    //   func(arr[i]);
    let i = 0;
    while (arr[i] !== undefined) {
      func(arr[i]);
      i++;
    }
  }
  forEach([2, 5, 8], function(el) {
    console.log(el);
  });

       // method 2  using for loops
       function forEach(arr, func) {
        for (let i = 0; i < arr.length; i++) {
          func(arr[i]);
    
        }
      }
      forEach([2, 5, 8], function(el) {
        console.log(el);
      });
  
  //   method 3
//    using for..of  loop -->  is a language feature introduced in ES6 (ECMAScript 2015) that provides an easy way
// to iterate over the values of an iterable object, such as an array, a string, a Map, a Set, or a generator function /
  
function forEach(arr, func) {
  for (let el of arr) {
    func(el);
  }
}
forEach([2, 5, 8], function(el) {
    console.log(el);
  });

//   question 3 
// using forEach method
function map(arr, func) {
    forEach(arr, function(el, i) {
      arr[i] = func(el);
    });
    return arr;
  }
  

// method 1   --> using reduce function 
function map(arr, func) {
  
    return arr.reduce(function(transformedArr, el) {
      transformedArr.push(func(el));
      return transformedArr;
    }, []);
  }
  console.log(map([2, 5, 8], function(el) { return el + 3; })); //output [5, 8, 11]
  console.log(map([1, 2, 3, 4, 5], function(el) { return el * 2; })); // output [2, 4, 6, 8, 10]
  
//   method 2 --> using map() function
function map(arr, func) {
    return arr.map(function(el) {
      return func(el);
    });
  }
  console.log(map([2, 5, 8], function(el) { return el + 3; })); //output [5, 8, 11]
  console.log(map([1, 2, 3, 4, 5], function(el) { return el * 2; })); // output [2, 4, 6, 8, 10]

  // Question 6 -->
//    Method 1 --> without arrow function
  function getKeys(obj) {
    return "[" + Object.keys(obj).map(function(key) {
      return '"' + key + '"';
    }).join(", ") + "]";
  } 
  console.log(getKeys({keyOne: 1, keyTwo: 2, keyThree: 3}));
// Method 2 --> with arrow function
function getKeys(obj) {
    return `[${Object.keys(obj).map(key => `"${key}"`).join(",")}]`;
  }
  console.log(getKeys({keyOne: 1, keyTwo: 2, keyThree: 3}));
   
//   question 7
// method 1 --> using reduce function
function getValues(obj) {
    return Object.keys(obj).reduce((valuesArray, key) => {
      valuesArray.push(obj[key]);
      return valuesArray;
    }, []);
  }
  console.log(getValues({keyOne: 1, keyTwo: 2, keyThree: 3}));
  
//   method 2 --> using arrow function
const getValues = obj => `[${Object.values(obj)}]`;
console.log(getValues({keyOne: 1, keyTwo: 2, keyThree: 3}));
// Output: "[1,2,3]"
//
const getValues = obj => Object.values(obj);
console.log(getValues({keyOne: 1, keyTwo: 2, keyThree: 3}));
// Output: [1, 2, 3]

  
  // task 5
  function getAdultAppleLovers(data) {
    // Filter the array of objects to get only the ones with favorite fruit as "apple"
    const appleLovers = data.filter(function(person) {
      return person.favoriteFruit === 'apple';
    });
    
    // Filter the resulting array to get only the objects where age is greater than 18
    const adultAppleLovers = appleLovers.filter(function(person) {
      return person.age > 18;
    });
    
    // Map the resulting array to create a new array of strings, which are the names of the objects
    const names = adultAppleLovers.map(function(person) {
      return person.name;
    });
    
    // Return the final array of names
    return names;
  }
  
