// Reverse a String challenge from freeCodeCamp.

/* 
Challenge: 
+ Reverse the provided string.
+ You may need to turn the string into an array before you can reverse it.
+ Your result must be a string.
*/

//Reverse a string - version no. 1
function reverseString(str) {
    var dummy_index, result = '';
    for (dummy_index = str.length-1; dummy_index >=0; dummy_index--) {
        result += str[dummy_index];
    }
    return result;
}

//Reverse a string - version no. 2
function reverseString1(str) {
  return str.split('').reverse().join('');
}

// Some simple testing: 
var someString = "hello hi and good bye";
console.log("Function: String Reversal with reverseString");
console.log("I want this sentence in reverse order: " + someString);
console.log("So I get what I want: " + reverseString(someString));
console.log(" ");
console.log("Function: String Reversal with reverseString1");
console.log(reverseString1(someString));
console.log(" ");
