// Caesars Cipher challenge from freeCodeCamp.

/* 
Challenge: 
Write a function which takes a ROT13 encoded string as input and 
returns a decoded string.
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
