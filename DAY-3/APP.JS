// 1. CHECK IF THE NUBER IS GRETER THAN OTEER OR NOT 
let num1 = 23
let num2 = 5
if (num1 > num2){
    console.log(`firstNumber =  ${num1} is greter`);
}
else{
    console.log(`secondNumber = ${num2} is bigger`)
}

// 2. check if a string is equal to another string 
let str1 = "rafey"
let str2 = "RAFEY"
if(str1 == str2){
    console.log("string 1 is equal to string 2")
}else{
    console.log("both string are not equal: ")
}

// 3.chek if a varable is number or not 
let vari = 12
if (typeof(vari) === "number"){
    console.log("varibale is number")
}else{
    console.log("variablw is not a number ")
}

// 4. check if a boolean value is true or false 
let val1 = false
if(val1){
    console.log("the value is true")
}else{
    console.log("the value is false ")
}

// 5. check if array is empty or not 
let arr = ["rafey", 1,2,3,4,]
if (arr.length === 0){
    console.log("the array is empty")
}else{
    console.log("the array have elements in it")
}