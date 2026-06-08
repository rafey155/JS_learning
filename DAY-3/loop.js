//1. writa a while loop that calculate the sum of all the natural number form 1 to 5 and store its result in a variable and conslole it

let  sum = 0
let i = 1
while(i<= 5){
    sum = sum + i
    i++
}
console.log(sum);

//2. write a code that count from 5 to 1 and store its in an array countdown 

let j = 5
let countDown =[]
while(j > 0){
    countDown.push(j)
    j--
}
console.log(countDown)

// 3. write a do while loop that prompts to enter the collection  of there tea untill the hit stop and store it in an array named teaCollection

let teaCollection = []
let tea 
do{
tea = prompt(`Enter the favroit tea and enter "STOP" to finish`);
    if(tea !== "stop"){
       teaCollection.push(tea) 
    }
}while(tea !== "stop")

// 4. write a do while loop that add number form 1 to 5 and sotre that result in a varible names reult 

let result = 0
let k = 1
do{
    result += k
    k++
}while( k <= 3)
console.log(result)

// 5.write a for loop thta multiplies each element in the array [2,4,6] by 2 and store the result in the new array name "multipledValues"

let arr =[2,4,6]
let multipledValues = []
for(let i = 0; i < arr.length; i++){
    numbers = arr[i] * 2
    multipledValues.push(numbers)
}
console.log(multipledValues)

// 6. write a foor loop thta list all cities in an array ["paris", "NY", "London", "tokoyo"] and store the each city in a new array called cityList.
let cities = ["paris", "NY", "London", "tokoyo"];
let cityList = []
for (let i = 0; i< cities.length; i++){
    cityList.push(cities[i])
}
console.log(cityList)

