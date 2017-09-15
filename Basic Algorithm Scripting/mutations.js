// Mutations challenge from freeCodeCamp.

/* 
Challenge: 
Return true if the string in the first element of the array contains 
all of the letters of the string in the second element of the array.
*/

function mutation(arr) {
  for (var dummyIndex = 0; dummyIndex < arr[1].length; dummyIndex++)
    if (arr[0].toLowerCase().indexOf(arr[1][dummyIndex].toLowerCase()) == -1)
      return false;
  return true;
}


// Some testing:
console.log("Function no. 10: Mutations");
console.log(mutation(["hello", "hey"])); //should return false.
console.log(mutation(["hello", "Hello"])); // should return true.
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); // should return true.
console.log(mutation(["Mary", "Army"])); // should return true.
console.log(mutation(["Mary", "Aarmy"])); // should return true.
console.log(mutation(["Alien", "line"])); // should return true.
console.log(mutation(["floor", "for"])); // should return true.
console.log(mutation(["hello", "neo"])); // should return false.
console.log(mutation(["voodoo", "no"])); // should return false.
console.log('');