// learning function 
// function for printing counting to 1 to 20
function printCounting(){
    for (let i = 1; i<=20; i++){
        console.log(i)
    }
}

let ans = printCounting();
console.log(ans)

// function with parameter 
function printNumber (num){ //the thing which is passed inside the "()" this is called parameter in the function defination.
    console.log("printing Number", num)
}

printNumber(6)//the thing which is passed inside the "()" this is called arguments in the function calling.

// finding the average of the 3 numbers 
function findAvg(a,b,c){
    let avg = (a+b+c)/2;
    return avg
}

let res = findAvg(2,3,4);
console.log("The average of the three number is = ", res)

// storing function inside a variable 
const sqr = function (num){
    let sqr = num **2;
    return sqr;
}

console.log("The square of the number is ",sqr(6));

// Arrow function 
const getSum = (a, b) => {
    return a + b;
};
console.log("The sum is ",getSum(2,2));
