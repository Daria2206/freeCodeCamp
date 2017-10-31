// Falsy Bouncer challenge from freeCodeCamp.

/* 
Challenge: 
Remove all falsy values from an array.
*/

function bouncer(arr) {
  return arr.filter(function(x) {return Boolean(x) == true});
}

// Some testing:
console.log("Function no. 12: Falsy Bouncer");
console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"])); // should return ["a", "b", "c"].
console.log(bouncer([false, null, 0, NaN, undefined, ""])); // should return [].
console.log(bouncer([1, null, NaN, 2, undefined])); // should return [1, 2].
console.log('');