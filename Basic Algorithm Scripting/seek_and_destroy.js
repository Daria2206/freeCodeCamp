// Seek and Destroy challenge from freeCodeCamp.

/* 
Challenge: 
You will be provided with an initial array (the first argument 
in the destroyer function), followed by one or more arguments. Remove all 
elements from the initial array that are of the same value as these arguments.
*/

function destroyer(arr) {
  var checkIn = [];
  for (var dummyIndex = 1; dummyIndex < arguments.length; dummyIndex++) 
    checkIn.push(arguments[dummyIndex]);
  return arr.filter(function(x){return checkIn.indexOf(x) == -1});
}

// Some testing:
console.log("Function no. 13: Seek and Destroy");
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // should return [1, 1].
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)); // should return [1, 5, 1].
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5)); // should return [1].
console.log(destroyer([2, 3, 2, 3], 2, 3)); // should return [].
console.log(destroyer(["tree", "hamburger", 53], "tree", 53)); // should return ["hamburger"].
console.log('');