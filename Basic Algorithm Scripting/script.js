// My code for JavaScript challanges from freeCodeCamp (Basic Algorithm Scripting).


/*
================================================================================
String reversal func: reverses the provided string.
================================================================================
*/

// Version no. 1
function reverseString(str) {
    var result = '';
    for (var dummy_index = str.length-1; dummy_index >=0; dummy_index--) {
        result += str[dummy_index];
    }
    return result;
}

// Version no. 2
function reverseString1(str) {
  return str.split('').reverse().join('');
}

// Some testing: 
var someString = "hello hi and good bye";
console.log("Function no. 1: String Reversal with reverseString");
console.log("I want this sentence in reverse order: " + someString);
console.log("So I get what I want: " + reverseString(someString));
console.log(" ");
console.log("Function no. 1: String Reversal with reverseString1");
console.log(reverseString1(someString));
console.log(" ");


/*
================================================================================
Factorialize func: returns the factorial of the provided integer.
================================================================================
*/

// Version 1: no recurrsion.
function factorialize(num) {
    var result = 1;
    for (num; num > 0; num--) {
        result *= num;
    }
    return result;
}

// Version 2: a recursive function (more verbose).
function factorializeRec(num) {
    if (num == 0) {
        return 1;
    }
    else if (num == 1) {
        return num;
    }
    else {
        return num * factorializeRec(num-1);
    }
}

// Version 3: a recursive function coded without curly brackets (less verbose).
function factorializeRecSimpler(num) {
    if (num == 0) return 1;
    if (num == 1) return num;
    return num * factorializeRecSimpler(num-1);
}

// Some testing:
console.log("Function no. 2: Factorial Calculation");
console.log("Below there are some simple tests of diffrent factorialize funcs:")

console.log("Test no. 1");
console.log("(1!) Correct answer: 1");
console.log("Func 1 result: " + factorialize(1));
console.log("Func 2 result: " + factorializeRec(1));
console.log("Func 3 result: " + factorializeRecSimpler(1));
console.log("All funcs returned correct result: " + (1 == factorialize(1) && 
           factorialize(1) == factorializeRec(1) && 
           factorializeRec(1) == factorializeRecSimpler(1)));
console.log('')

console.log("Test no. 2");
console.log("(3!) Correct answer: 6");
console.log("Func 1 result: " + factorialize(3));
console.log("Func 2 result: " + factorializeRec(3));
console.log("Func 3 result: " + factorializeRecSimpler(3));
console.log("All funcs returned correct result: " + (6 == factorialize(3) && 
           factorialize(3) == factorializeRec(3) && 
           factorializeRec(3) == factorializeRecSimpler(3)));
console.log('')

console.log("Test no. 3");
console.log("(10!) Correct answer: 3628800");
console.log("Func 1 result: " + factorialize(10));
console.log("Func 2 result: " + factorializeRec(10));
console.log("Func 3 result: " + factorializeRecSimpler(10));
console.log("All funcs returned correct result: " + (3628800 == factorialize(10) && 
           factorialize(10) == factorializeRec(10) && 
           factorializeRec(10) == factorializeRecSimpler(10)));
console.log('')

console.log("Test no. 4");
console.log("(15!) Correct answer: 1307674368000");
console.log("Func 1 result: " + factorialize(15));
console.log("Func 2 result: " + factorializeRec(15));
console.log("Func 3 result: " + factorializeRecSimpler(15));
console.log("All funcs returned correct result: " + (1307674368000 == factorialize(15) && 
           factorialize(15) == factorializeRec(15) && 
           factorializeRec(15) == factorializeRecSimpler(15)));
console.log('')

console.log("Test no. 5");
console.log("(0!) Correct answer: 1");
console.log("Func 1 result: " + factorialize(0));
console.log("Func 2 result: " + factorializeRec(0));
console.log("Func 3 result: " + factorializeRecSimpler(0));
console.log("All funcs returned correct result: " + (1 == factorialize(0) && 
           factorialize(0) == factorializeRec(0) && 
           factorializeRec(0) == factorializeRecSimpler(0)));
console.log('')


/*
================================================================================
Check for Palindromes func: returns true if the given string is a palindrome. 
================================================================================
*/

function palindrome(str) {
  var cleanString, reverseString;
  // Turning string lower case and removing all non-alphanumeric characters.
  cleanString = str.trim().toLowerCase().replace(/[^a-z0-9]/g, ""); 
  // Reversing string to check whether is a palindrome.
  reverseString = cleanString.split('').reverse().join(''); 
  return cleanString == reverseString;
}

// Some testing (freeCodeCamp test cases): 
console.log("Function no. 3: Check for Palindromes")
console.log("For '2A3*3a2' should be TRUE and it's " + palindrome("2A3*3a2"));
console.log("For 'eye' should be TRUE and it's " + palindrome("eye"));
console.log("For '_eye' should be TRUE and it's " + palindrome("_eye"));
console.log("For 'race car' should be TRUE and it's " + palindrome("race car"));
console.log("For 'not a palindrome' should be FALSE and it's " + 
palindrome("not a palindrome"));
console.log("For 'A man, a plan, a canal. Panama' should be TRUE and it's " + palindrome("A man, a plan, a canal. Panama"));
console.log("For 'never odd or even' should be TRUE and it's " + palindrome("never odd or even")); 
console.log("For 'nope' should be FALSE and it's " + palindrome("nope"));
console.log("For 'almostomla' should be FALSE and it's " + palindrome("almostomla"));
console.log("For 'My age is 0, 0 si ega ym.' should be TRUE and it's " + palindrome("My age is 0, 0 si ega ym."));
console.log("For '1 eye for of 1 eye.' should be FALSE and it's " + palindrome("1 eye for of 1 eye."));
console.log("For '0_0 (: /-\ :) 0-0' should be TRUE and it's " + palindrome("0_0 (: /-\ :) 0-0")); 
console.log("For 'five|\_/|four' should be FALSE and it's " + palindrome("five|\_/|four"));
console.log('');


/*
==================================================================================
Longest Word in a String func: returns the len of the longest word in the sentence.
==================================================================================
*/

function findLongestWord(str) {
  var splitSentence = str.trim().split(' '), longest = 0;
  for (dummyCounter = 0; dummyCounter < splitSentence.length; dummyCounter++) {
    if (splitSentence[dummyCounter].length > longest) 
      longest = splitSentence[dummyCounter].length;
  }
  return longest;
}

// Some testing:
console.log("Function no. 4: Longest Word in a String")
console.log('The longest word in "The quick brown fox jumped over the lazy dog" is 6.')
console.log("My func returns: " + findLongestWord("The quick brown fox jumped over the lazy dog")); 
console.log('The longest word in "May the force be with you" is 5.')
console.log("My func returns: " + findLongestWord("May the force be with you")); 
console.log('The longest word in "What if we try a super-long word such as otorhinolaryngology" is 19.')
console.log("My func returns: " + findLongestWord("What if we try a super-long word such as otorhinolaryngology")); 
console.log('');


/*
================================================================================
Title Case a Sentence: returns the string with the first letter of each word 
capitalized
================================================================================
*/

function titleCase(str) {
  var result;
  result = str.trim().split(' ');
  for (var dummyNum = 0; dummyNum < result.length; dummyNum++) {
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


/*
================================================================================
Return Largest Numbers in Arrays: returns an array consisting of the largest 
number from each provided sub-array. 
================================================================================
*/

//Version 1: using Function.prototype.apply() to find the maximum element in a numeric array.
function largestOfFourOne(arr) {
  var resultList = [];
  for (var dummyIndex = 0; dummyIndex < arr.length; dummyIndex++) 
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
  var resultList = [], args;
  for (var dummyIndex = 0; dummyIndex < arr.length; dummyIndex++) {
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
  var resultList = [], greatest;
  for (var dummyIndex = 0; dummyIndex < arr.length; dummyIndex++) {
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

// Version 5: using arguments object.
function largestOfFourFive(arr) {
  var dummyIndex1, dummyIndex2, dummyElement, resultList = [], greatest;
  for (dummyIndex1 = 0; dummyIndex1 < arr.length; dummyIndex1++) {
    dummyElement = arr[dummyIndex1];
    greatest = Number.NEGATIVE_INFINITY;
    function max(dummyElement) {
      for (dummyIndex2 = 0; dummyIndex2 < arguments.length; dummyIndex2++) {
        if (arguments[dummyIndex2] > greatest) {
          greatest = arguments[dummyIndex2];
          resultList[dummyIndex1] = greatest;
        }
      }
    } 
  }
  return resultList;
}

// Some testing:
console.log("Function no. 6 [version 5: with arguments object]: Return Largest Numbers in Arrays");
console.log(largestOfFourFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFourFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log('');


/*
================================================================================
Confirm the Ending: Check if a string (first argument, str) ends with the given
target string (second argument, target). Don't use .endsWith() method.
================================================================================
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
console.log('');

/*
================================================================================
Repeat a string repeat a string: Repeat a given string (first argument) num 
times (second argument). Return an empty string if num is not a positive number.
================================================================================
*/

// Version no. 1: without repeat()
function repeatStringNumTimes(str, num) {
  var dummyCounter = 0, result = '';
  if (num <= 0) {
    return result;
  }
  else {
    for (dummyCounter; dummyCounter < num; dummyCounter++)
    result += str;
  return result;
  }
}

console.log("Function no. 8: repeatStringNumTimes (without repeat()");
console.log(repeatStringNumTimes("abc", 3));
console.log('');

// Version no. 2: with repeat()
function repeatStringNumTimes2015(str, num) {
  if (num <= 0) 
    return '';
  else 
    return str.repeat(num);
}

console.log("Function no. 8: repeatStringNumTimes (with repeat())");
console.log(repeatStringNumTimes2015("abc", 3));
console.log('');


/*
================================================================================
Truncate a string: Truncate a string (first argument) if it is longer than the 
given maximum string length (second argument). Return the truncated string with 
a ... ending. Note that inserting the three dots to the end will add to the 
string length. However, if the given maximum string length num is less than or 
equal to 3, then the addition of the three dots does not add to the string 
length in determining the truncated string.
================================================================================
*/

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num > 3 ? num-3 : num) +"...";
  }
  else {
    return str;
  }
}

// Some testing:
console.log("Function no. 8: Truncate a string");
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 14)); // should return "Peter Piper...".
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 
           "A-tisket a-tasket A green and yellow basket".length)); // should return "A-tisket a-tasket A green and yellow basket".
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 
            "A-tisket a-tasket A green and yellow basket".length + 2));// should return "A-tisket a-tasket A green and yellow basket".
console.log(truncateString("A-", 1)); // should return "A...".
console.log(truncateString("Absolutely Longer", 2));// should return "Ab...".
console.log('');

/*
================================================================================
Chunky Monkey: Write a function that splits an array (first argument) into 
groups the length of size (second argument) and returns them as a 
two-dimensional array.
================================================================================
*/

function chunkArrayInGroups(arr, size) {
  var result = [];
  for (var start = 0; start < arr.length; start += size) 
    result.push(arr.slice(start, start + size));
  return result;
}

console.log("Function no. 9: Chunky Monkey");
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log('');


/*
================================================================================
Slasher Flick: Return the remaining elements of an array after chopping off n 
elements from the head.
================================================================================
*/

function slasher(arr, howMany) {
  return arr.splice(howMany);
}

// Some testing: 
console.log("Function no. 10: Slasher Flick");
console.log(slasher([1, 2, 3], 2));
console.log(slasher([1, 2, 3], 2)); // should return [3].
console.log(slasher([1, 2, 3], 0)); // should return [1, 2, 3].
console.log(slasher([1, 2, 3], 9)); // should return [].
console.log(slasher([1, 2, 3], 4)); // should return [].
console.log(slasher(["burgers", "fries", "shake"], 1)); // should return ["fries", "shake"].
console.log(slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5)); // should return ["cheese", 4].
console.log('');



/*
================================================================================
Mutations: Return true if the string in the first element of the array contains 
all of the letters of the string in the second element of the array.
================================================================================
*/

function mutation(arr) {
  for (var dummyIndex = 0; dummyIndex < arr[1].length; dummyIndex++)
    if (arr[0].toLowerCase().indexOf(arr[1][dummyIndex].toLowerCase()) == -1)
      return false;
  return true;
}


// Some testing:
console.log("Function no. 11: Mutations");
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


/*
================================================================================
Falsy Bouncer: Remove all falsy values from an array.
================================================================================
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

/*
================================================================================
Seek and Destroy: You will be provided with an initial array (the first argument 
in the destroyer function), followed by one or more arguments. Remove all 
elements from the initial array that are of the same value as these arguments.
================================================================================
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


/*
================================================================================
Where do I belong: Return the lowest index at which a value (second argument) 
should be inserted into an array (first argument) once it has been sorted. The 
returned value should be a number.
================================================================================
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


/*
================================================================================
Caesars Cipher: Write a function which takes a ROT13 encoded string as input and 
returns a decoded string.
================================================================================
*/

function rot13(str) { 
  var coded, decoded, decodedString;
  coded = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  decoded = 'NOPQRSTUVWXYZABCDEFGHIJKLM';
  decodedString = '';
  for (var dummyIndex = 0; dummyIndex < str.length; dummyIndex++) {
    if (str[dummyIndex].match(/[A-Z]/)) 
      decodedString += decoded[coded.indexOf(str[dummyIndex])];
    else 
      decodedString += str[dummyIndex];
  }
  return decodedString;
}

// Some testing:
console.log("Function no. 15: Caesars Cipher");
console.log(rot13("SERR PBQR PNZC")); // should decode to "FREE CODE CAMP"
console.log(rot13("SERR CVMMN!")); // should decode to "FREE PIZZA!"
console.log(rot13("SERR YBIR?")); // should decode to "FREE LOVE?"
console.log(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.")); // should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."
console.log('');


/*
================================================================================
END OF BASIC ALGORITHMS SCRIPTING
================================================================================
*/







