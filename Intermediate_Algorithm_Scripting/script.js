/*
My code for JavaScript challanges from freeCodeCamp (Intermediate Algorithm
 Scripting).
 */


/*
==============================================================================
DNA Pairing: The DNA strand is missing the pairing element. Take each 
character, get its pair, and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided 
character.Return the provided character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
The character and its pair are paired up in an array, and all the arrays are 
grouped into one encapsulating array.
==============================================================================
*/

function pairElement(str) {
  "use strict";
  var pairs = {"A":"T", "T":"A", "G":"C", "C":"G"};
  var result = [];
  for (var i = 0; i < str.length; i++) {
    result.push([str[i], pairs[str[i]]]);
  }
  return result;
}

// Tests:
console.log("DNA pairing");
console.log(pairElement("GCG")); // should return [["G", "C"], ["C","G"],["G", "C"]]
console.log(pairElement("ATCGA")); //should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
console.log(pairElement("TTGAG")); //should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
console.log(pairElement("CTCTA")); //should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
console.log('');

/*
================================================================================
Missing letters 
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
================================================================================
*/

function fearNotLetter(str) {
  "use strict";
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var start = alphabet.search(str[0]);
    for (var i = 0; i < str.length; i++) {
      if (str[i] != alphabet[start+i]) {
          return alphabet[start+i]; 
          }
    }
}

// Tests:
console.log("Fear no letter");
console.log(fearNotLetter("abce")); // should return "d".
console.log(fearNotLetter("abcdefghjklmno")); // should return "i".
console.log(fearNotLetter("bcd")); //should return undefined.
console.log(fearNotLetter("yz")); //should return undefined.
console.log('');

/*
================================================================================
Boo who
Check if a value is classified as a boolean primitive. Return true or false.
================================================================================
*/

function booWho(bool) {
  "use strict";
  if (typeof bool == "boolean") {
    return true;
  }
  else {
    return false;
  }
}

// Some tests
console.log("Boo hoo");
console.log(booWho(true)); // should return true.
console.log(booWho(false)); //  should return true.
console.log(booWho([1, 2, 3])); //  should return false.
console.log(booWho([].slice)); //  should return false.
console.log(booWho({ "a": 1 })); //  should return false.
console.log(booWho(1)); //  should return false.
console.log(booWho(NaN)); //  should return false.
console.log(booWho("a")); //  should return false.
console.log(booWho("true")); //  should return false.
console.log(booWho("false")); // should return false.
console.log("");


/*
==============================================================================
Sorted Union
Write a function that takes two or more arrays and returns a new array of 
unique values in the order of the original provided arrays. In other words, 
all values present from all arrays should be included in their original order, 
but with no duplicates in the final array. The unique numbers should be sorted 
by their original order, but the final array should not be sorted in numerical 
order.
==============================================================================
*/ 

function uniteUnique(arr) {
  "use strict";
  var values = [].concat.apply([], Array.from(arguments));
  var alreadyThere = {};
  var sansDuplicates = [];
  for (var i=0; i<values.length; ++i) {
    if (!(values[i] in alreadyThere)) {
      alreadyThere[values[i]] = null;
      sansDuplicates.push(values[i]);
    }
  }
  return sansDuplicates;
}


// Some tests
console.log("Sorted Union");
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // should return [1, 3, 2, 5, 4].
console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]])); // should return [1, 3, 2, [5], [4]].
console.log(uniteUnique([1, 2, 3], [5, 2, 1])); // should return [1, 2, 3, 5].
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])); // should return [1, 2, 3, 5, 4, 6, 7, 8].
console.log("");



/*
==============================================================================
END OF INTERMEDIATE ALGORITHMS SCRIPTING
==============================================================================
*/







