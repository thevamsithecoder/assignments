function sum(a, b) {
  return a + b;
}
const finalSum = sum(3, 4);
console.log(finalSum); //7

function getLength(str) {
  console.log("Original String:", str); //Original String: Hello World
  console.log("Length:", str.length); //Length: 11
}
getLength("Hello World"); 
const index = "hello world";
console.log(index.indexOf("world")); //6


function findIndexOf(str, target) {
  console.log("Original String:", str); //Original String: Hello World
  console.log("Index:", str.indexOf(target)); //Index: 6
  console.log("Index:", str.lastIndexOf(target)); //Index: 12
} 
findIndexOf("Hello World World", "World");


function getSlice(str, start, end) {
    console.log("Original String:", str); //Original String: Hello World
    console.log("After slice:", str.slice(start, end)); //After slice: Hello
  }
  getSlice("Hello World", 0, 5);


// replace
function replaceString(str, target, replacement) {
    console.log("Original String:", str); // Original String: Hello World
    console.log("After replace:", str.replace(target, replacement)); // After replace: Hello JavaScript
  }
  replaceString("Hello World", "World", "JavaScript");

//split
const value = "hi,my,name,is,harkirat";
const words = value.split(",");
console.log(words); //[ 'hi', 'my', 'name', 'is', 'harkirat' ]

//trim
const value1 = "    vamsi sai       "
console.log(value1.trim());//vamsi sai

const uppercase = "hello world";
console.log(uppercase.toUpperCase(uppercase)); //HELLO WORLD

const lowercase = "HELLO World";
console.log(lowercase.toLowerCase(lowercase)); //hello world