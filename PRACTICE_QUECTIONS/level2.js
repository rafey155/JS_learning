// Level 2: Loop + Logic

// Q6 Reverse a number.
let num = 12345;
let reversed = Number(num.toString().split("").reverse().join(""));
// console.log(reversed)

// Q7 Check if a number is palindrome.

let val1 = 1212121;
let rev = Number(val1.toString().split("").reverse().join(""));
if (val1 === rev) {
  //   console.log("palendrome");/
} else {
  //   console.log("not palenfrome");
}

// Q8 Find the factorial.

let val2 = 5;
let fact = 1;
for (let i = 1; i <= val2; i++) {
  fact *= i;
}
// console.log("factorial if a number is = ", fact)

// factorial usning function
function findFact(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
}

let res = findFact(5);
// console.log(res)

// Q9 Print this pattern
// *
// **
// ***
// ****
// *****

for (let i = 1; i <= 5; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
  console.log(pattern);
}

// Q10 Print this pattern
// *****
// ****
// ***
// **
// *

for (let i = 5; i >= 1; i--) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
  console.log(pattern);
}
