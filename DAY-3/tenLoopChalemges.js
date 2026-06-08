// 1. write for loop that loop through an array ["green tea", "black tea", "chai", oolong tea"] and stop the loop when its find chai. store all tea befor chai in a new array name selected tea 
let tea = ["green tea", "black tea", "chai", "oolong tea"]
let selectedTea = []
for(let i = 0; i<= tea.length; i++){
    if(tea[i] === "chai"){
        break
    }
    selectedTea.push(tea[i])
}

console.log(selectedTea) 

// 2. writa for loop thta loop through an array of cities ["london", "NY", "paris","berlin"] and skip paris store the other cities in a new array visited cities
let cities = ["london", "NY", "paris", "berlin"];
let visitedcities = []
for (let i = 0; i < cities.length; i++){
    if(cities[i] === "paris"){
        continue
    }
    visitedcities.push(cities[i])
}
console.log(visitedcities)

// 3. use the for of loop to go thriugh array [1,2,3,4,5,6] and stop when the number "4" come and store the number before 4 in an array name "small number"

let number = [1, 2, 3, 4, 5, 6];
let smallNumber = []
for (const num of number) {
    if (num === 4){
        break
    }
    smallNumber.push(num)
}

console.log(smallNumber)

// 4. use a for of loop to itrate an array ["chai", "green tea", "herbal tea", "black tea"] and skip herbal tea and store the tea in an array preferd tea 
let teaType = ["chai", "green tea", "herbal tea", "black tea"];
let preferedTea = []
for (const tea of teaType) {
    if (tea === "herbal tea"){ // here we dont have to use the arrya calling it just for of loop doing the task 
        continue
    }
    preferedTea.push(tea)
}

console.log(preferedTea)

// 5.