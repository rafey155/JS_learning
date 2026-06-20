// Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number".

function stringToNumber(str){
   const num = +str
   return isNaN (str) ? "not a number" : num
}
// const res = stringToNumber("rafey")
// console.log(res)


// 2.Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc.

function flipBoolean(bool){
    const value = Boolean(bool)
    return !value 
}

// const res = flipBoolean(1)
// console.log(res)

//3. Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"

function whatAmI(value){
    if (typeof value === "number") {
      return "I am a number";
    }
    if (typeof value === "string") {
      return "I am a string";
    }
}

// console.log(whatAmI("rafey"))

// 4. Write a function isItTruthy that takes an input and returns "It's truthy!" if the value is truthy in JavaScript, or "It's falsey!" if it's falsey.

function isItTruthy(value){
   if (value){
    return "truthy value"
   }

   return "flase value"
}
console.log(isItTruthy("rafey"))