// Check for Palindromes challenge from freeCodeCamp.

/* 
Challenge: 
+ Return true if the given string is a palindrome. Otherwise, return false.
+ A palindrome is a word or sentence that's spelled the same way both forward and 
backward, ignoring punctuation, case, and spacing.

Note: 
You'll need to remove all non-alphanumeric characters (punctuation, spaces and 
symbols) and turn everything lower case in order to check for palindromes.
We'll pass strings with varying formats, such as "racecar", "RaceCar", and 
"race CAR" among others. We'll also pass strings with special symbols, such as 
"2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
*/

function palindrome(str) {
  var cleanString, reverseString;
  // Turning string lower case and removing all non-alphanumeric characters.
  cleanString = str.trim().toLowerCase().replace(/[^a-z0-9]/g, ""); 
  // Reversing string to check whether is a palindrome.
  reversedString = cleanString.split('').reverse().join(''); 
  return cleanString == reversedString;
}

// Some testing (freeCodeCamp test cases): 
console.log("Function no. 3: Check for Palindromes")
console.log("For '2A3*3a2' should be TRUE and it's " + palindrome("2A3*3a2"));
console.log("For 'eye' should be TRUE and it's " + palindrome("eye"));
console.log("For '_eye' should be TRUE and it's " + palindrome("_eye"));
console.log("For 'race car' should be TRUE and it's " + palindrome("race car"));
console.log("For 'not a palindrome' should be FALSE and it's " + palindrome("not a palindrome"));
console.log("For 'A man, a plan, a canal. Panama' should be TRUE and it's " + palindrome("A man, a plan, a canal. Panama"));
console.log("For 'never odd or even' should be TRUE and it's " + palindrome("never odd or even")); 
console.log("For 'nope' should be FALSE and it's " + palindrome("nope"));
console.log("For 'almostomla' should be FALSE and it's " + palindrome("almostomla"));
console.log("For 'My age is 0, 0 si ega ym.' should be TRUE and it's " + palindrome("My age is 0, 0 si ega ym."));
console.log("For '1 eye for of 1 eye.' should be FALSE and it's " + palindrome("1 eye for of 1 eye."));
console.log("For '0_0 (: /-\ :) 0-0' should be TRUE and it's " + palindrome("0_0 (: /-\ :) 0-0")); 
console.log("For 'five|\_/|four' should be FALSE and it's " + palindrome("five|\_/|four"));
console.log('');