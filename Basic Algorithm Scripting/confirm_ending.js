// Confirm the Ending challenge from freeCodeCamp.

/* 
Challenge: 
+ Check if a string (first argument, str) ends with the given target string 
(second argument, target).
+ This challenge can be solved with the .endsWith() method, which was introduced 
in ES2015. But for the purpose of this challenge, we would like you to use one 
of the JavaScript substring methods instead.
*/

function confirmEnding(str, target) {
  var endingLen, endingStart, ending;
  endingLen = target.length;
  endingStart = str.length - target.length;
  ending = str.substr(endingStart, endingLen);
  if (ending == target)
    return true; 
  else
    return false;
}

// Some testing:
console.log("Function no. 7: confirmEnding");
console.log('"Bastian" ends with "n".');
console.log(confirmEnding("Bastian", "n"));