// Where do I belong challenge from freeCodeCamp.

/* 
Challenge: 
Return the lowest index at which a value (second argument) 
should be inserted into an array (first argument) once it has been sorted. The 
returned value should be a number.
*/

function getIndexToIns(arr, num) {
  var tempArray = arr.concat(num).sort(function numerical_order(a,b) {
    return a-b;
  });
  return tempArray.indexOf(num);
}

console.log("Function no. 14: Where do I belong");
console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); // should return 3.
console.log(getIndexToIns([10, 20, 30, 40, 50], 30)); // should return 2.
console.log(getIndexToIns([40, 60], 50));// should return 1.
console.log(getIndexToIns([3, 10, 5], 3)); // should return 0.
console.log(getIndexToIns([5, 3, 20, 3], 5)); // should return 2.
console.log(getIndexToIns([2, 20, 10], 19)); // should return 2.
console.log(getIndexToIns([2, 5, 10], 15)); // should return 3.
console.log('');