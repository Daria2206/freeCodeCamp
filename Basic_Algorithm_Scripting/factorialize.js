// Factorialize a Number challenge from freeCodeCamp.

/* 
Challenge: 
+ Return the factorial of the provided integer.
+ If the integer is represented with the letter n, a factorial is the product of 
  all positive integers less than or equal to n.
+ Factorials are often represented with the shorthand notation n!
+ For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
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
console.log("Function: Factorial Calculation");
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
