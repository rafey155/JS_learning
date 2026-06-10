// 1. Print numbers from 1 to 10
for (let i = 1; i <= 100; i++) {
  // console.log(i)
}

// 2. Print numbers from 10 to 1
for (let i = 10; i > 0; i--) {
  // console.log(i)
}

// 3.Print all even numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    // console.log(i)
  }
}

// 4. Print all odd numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
  if (i % 2 != 0) {
    // console.log(i)
  }
}

// 5. Find sum of numbers from 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
// console.log(sum);

// 6. Print multiplication table of 7
for (let i = 1; i <= 10; i++) {
  // console.log(`7 * ${i} = ${7*i}`)
}

// 7.Find factorial of a number
let num = 5;
let fact = 1;
for (let i = 1; i <= num; i++) {
  fact *= i;
}
// console.log(fact)

// 8. Count digits in a number
let number = 123456789;
let count = 0;
for (let i = 1; i <= number.toString().length; i++) {
  count++;
}
// console.log(count)

// 9.Print pyramid pattern
// *
// **
// ***
// ****
// *****
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}