// 1. create a function name makeTea that takes a parameter typeOfTea and return a string "making green tea " when green tea store then store a result in a varibale name tea order 
function makeTea(typeOfTea) {
  return `making ${typeOfTea} tea`;
}
const teaOrder = makeTea("matcha")
// console.log(teaOrder)

// 2. create a function name "orderTea" that takes a parameter "teaType" inside the function create another function named "confermOrder" tat return message "order conferm for chai" call confermOrder for with the orderTea and return the result 
function orderTea(teaType){
    function confermOrder(){
        return `order conferm for ${teaType}`
    }
    return confermOrder()
}
// console.log(orderTea("chai"))

// 3. create an arrow function that takes two parameter "price" and "quantity" the function shuold return the total amout by multipliying the the price and quantiy store the reuslt in the varibale name totalAmount and console it 
const calculateTotal = (Price,quantity) => {
    return `the total amount is = ${Price * quantity}`
}

let total = calculateTotal(30, 90)
// console.log(total)

// 4. creta a function name "processTea" that takes another function "makeTea" as parameter and call it within the argumet "earl grey" retuen the calling make tea

function makeTea(teaType){
    return `making : ${teaType}`
}

function processTea(teaProcessing){
    return teaProcessing("chai");
}

// console.log(processTea(makeTea))

// 5. create a function "cretaeTeaMaker" that return another function the return function should take an parameter "teaType" and return a message like "makin green tea" store the result in the cariable and call it with green tea 

function createTeaMaker(){
    return function (teaType){
        return `making ${teaType}`
    }
}

const teaMaker = createTeaMaker()
console.log(teaMaker("green tea"))


// 6. create a function thta find the factorial of a number 
function findFact(n){
    let fact = 1;
    for(let i = 1; i<=n; i++){
        fact *= i
    }
    return fact
}

// write a function that returns the length of a number 
function findLen(num){
    const str = num.toString()
    return str.length
}

console.log(findLen(12345))

