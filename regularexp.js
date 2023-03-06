let re = new RegExp(".*");

//can create a static regex
let re1 = /[a-z]+/i;
if(re1.test("Foo")){
console.log("Match Exists");
}

//Match with .exec()
var re2 = /([0-9]+)[a-z]+/g;
var match = re2.exec("foo123bar345gjktgj");
console.log(match[0]);
console.log(match.index);
console.log(match[1]);

// USing regex with strings
//"string".match, replace, split and search
console.log("strijng".match(/[i-n]+/)); //ijn
console.log("strjing".match(/(r)[i-n]+/)); //rjin

console.log("string".replace(/[i-n]+/,"foo"));

console.log("stringstring".split(/[i-n]+/));

console.log("string".search(/[i-n]+/));