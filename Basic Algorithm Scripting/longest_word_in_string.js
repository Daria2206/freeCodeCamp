// Find the Longest Word in a String challenge from freeCodeCamp.

/* 
Challenge: 
+ Return the length of the longest word in the provided sentence.
+ Your response should be a number.
*/

function findLongestWord(str) {
  var splitSentence = str.trim().split(' '), dummyCounter = 0, longest = 0;
  for (dummyCounter; dummyCounter < splitSentence.length; dummyCounter++) {
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