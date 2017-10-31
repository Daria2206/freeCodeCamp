// Title Case a Sentence challenge from freeCodeCamp.

/* 
Challenge: 
+ Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
+ For the purpose of this exercise, you should also capitalize connecting words like "the" and "of"
*/

function titleCase(str) {
  var dummyNum, result;
  result = str.trim().split(' ');
  for (dummyNum = 0; dummyNum < result.length; dummyNum++) {
    result[dummyNum] = result[dummyNum].charAt(0).toUpperCase() + result[dummyNum].slice(1).toLowerCase();
  }
  return result.join(' ');
}

// Some testing:
console.log("Function no. 5: Title Case a Sentence");
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt")); 
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
console.log('');