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

// 5.use a for in loop to loop through an object containing city population and stop the loop when the population of brelin is found and sotre the all preivious cities population in a new object named citypopulation the object is 
// let citiesPopulation = {
//     "london":890000,
//     "Ny":8400000,
//     "Paris":2200000,
//     "Berlin":350000
// }

let citiesPopulation = {
  london: 890000,
  Ny: 8400000,
  Paris: 2200000,
  Berlin: 350000,
};
let cityNewpopulation ={}

for (const cities in citiesPopulation) {
    if(cities === "Berlin"){
        break
    }
    cityNewpopulation[cities] = citiesPopulation[cities]
}

console.log(cityNewpopulation)

// 6. use a for in loop to loop through an object containing city population skip any city with a population belllow 3 million and store rest in the new object largeCity => let worldCities = { sydnee : 500000, tokoyo : 9000000, Berlin : 3500000, paris : 22000000}

let worldCities = {
  sydnee: 500000,
  tokoyo: 900000,
  Berlin: 35000,
  paris: 2200000,
};
let largeCities = {}
for (const city in worldCities) {
    if(worldCities[city] < 300000){ // here we use "object[key]" because we want to acces the value of the object. 
        continue
    }

    largeCities[city] = worldCities[city]
}

console.log(largeCities)

// 7. creta a for each loop that itrate through an array ["earl tea", "green tea", "chai", oolong tea] stop the loop when chai is found and store all the privious value in an array named availableTea.

let myteaType = ["earl tea", "green tea", "chai", "oolong tea"]
let availableTea = []
myteaType.forEach((tea) =>{
    if(tea === "chai"){
        return
    }
    availableTea.push(tea)
})
console.log(availableTea)

// 8. write a for each loop that ittrae thorough an array ["berlin", "sydene", "Tokoyo", "Paris"] skip sydene and store the rest of the elment in the new array traveled city.

let favCity = ["berlin", "sydene", "Tokoyo", "Paris"];
let traveledCity = []
favCity.forEach((city) => {
    if(city === "berlin"){
        return
    }
    traveledCity.push(city)
});

console.log(traveledCity)

// 9. write a for loop that itrate through an array [2,3,4,5] skip the value 4 and store the rest value with multiplied by 2 in a new array named doubledValue.
let Numbers = [2,3,4,5]
let doubledNumber = []
for(let i = 0; i < Numbers.length; i++){
    if(Numbers[i] === 4){
        continue
    }
    doubledNumber.push(Numbers[i] * 2)
}

console.log(doubledNumber)