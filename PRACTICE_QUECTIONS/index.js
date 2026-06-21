// Level 1: Warm-Up (Build Logic)
// Loops

// Q1. Print numbers from 1 to 50 and save it in array.

let arr = []
for(let i = 1; i<=50; i++){
    arr.push(i)
}
console.log(arr);

// Q2. Print only even numbers between 1 and 100.

for (let i = 1; i<=100; i++){
    if(i % 2 ===0){
        console.log(i)
    }
    
}

// Q3. Find the sum of numbers from 1 to 100.

let sum = 0
for(let i = 1; i<=100; i++){
    sum +=i
}
console.log(sum)

// Q4. Print the multiplication table of 7.
let num = 7
for (let i = 1; i<=10; i++){
    console.log(`${num} * ${i} = ${num * i}`)
}
// Q5. Count how many digits are present in a number.
let number = 1234567890
let count = 0
for(; number > 0; number = Math.floor(number / 10) ){
    count++;
}

console.log(count);
