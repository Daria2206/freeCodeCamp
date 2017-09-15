// Chunky Monkey challenge from freeCodeCamp.

/* 
Challenge: 
Write a function that splits an array (first argument) into 
groups the length of size (second argument) and returns them as a 
two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
  var start = 0, result = [];
  for (start; start < arr.length; start += size) 
    result.push(arr.slice(start, start + size));
  return result;
}

console.log("Function no. 9: Chunky Monkey");
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log('');