// Return Largest Numbers in Arrays challenge from freeCodeCamp.

/* 
Challenge: 
+ Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays.
+ Remember, you can iterate through an array with a simple for loop, and access 
each member with array syntax arr[i].
*/


//Version 1: using Function.prototype.apply() to find the maximum element in a numeric array.
function largestOfFourOne(arr) {
  var dummyIndex, resultList = [];
  for (dummyIndex = 0; dummyIndex < arr.length; dummyIndex++) 
    resultList.push(Math.max.apply(null, arr[dummyIndex]));
  return resultList;
}

// Some testing:
console.log("Function no. 6 [version 1: with apply()]: Return Largest Numbers in Arrays");
console.log(largestOfFourOne([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFourOne([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log('');

//Version 2: using the spread operator.
function largestOfFourTwo(arr) {
  var dummyIndex, resultList = [], args;
  for (dummyIndex = 0; dummyIndex < arr.length; dummyIndex++) {
    args = arr[dummyIndex];
    resultList.push(Math.max(...args));
  }
  return resultList;
}

// Some testing:
console.log("Function no. 6 [version 2: with spread operator]: Return Largest Numbers in Arrays");
console.log(largestOfFourTwo([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFourTwo([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log('');

//Version 3: using reduce.
function largestOfFourThree(arr) {
  var dummyIndex, resultList = [], greatest;
  for (dummyIndex = 0; dummyIndex < arr.length; dummyIndex++) {
    greatest = arr[dummyIndex].reduce(function(a,b){
      return Math.max(a, b);
    });
    resultList.push(greatest);
  }
  return resultList;
}

// Some testing:
console.log("Function no. 6 [version 3: with reduce]: Return Largest Numbers in Arrays");
console.log(largestOfFourThree([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFourThree([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log('');

// Version 4: using simple loops.
function largestOfFourFour(arr) {
  var dummyIndex1, dummyIndex2, dummyElement, resultList = [], greatest;
  for (dummyIndex1 = 0; dummyIndex1 < arr.length; dummyIndex1++) {
    dummyElement = arr[dummyIndex1];
    greatest = Number.NEGATIVE_INFINITY;
    for (dummyIndex2 = 0; dummyIndex2 < dummyElement.length; dummyIndex2++) {
      if (dummyElement[dummyIndex2] > greatest) {
        greatest = dummyElement[dummyIndex2];
        resultList[dummyIndex1] = greatest;
      }
    } 
  }
  return resultList;
}

// Some testing:
console.log("Function no. 6 [version 4: with simple loop]: Return Largest Numbers in Arrays");
console.log(largestOfFourFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFourFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log('');