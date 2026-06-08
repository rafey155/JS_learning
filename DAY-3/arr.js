// 1. create an array of teaFlavour and access the second elemt of the array
let teaFlavours = ["green tea", "black tea", "oolong tea"]
const favTea = teaFlavours[2]
console.log(favTea)

// 2. chnage the third element of an arrya to "jasmin tea "
const favTea =[ "masla tea", "oolonf tea", "lemon tea", "herbal tea"]
 favTea[3] = "jasmin tea"
 console.log(favTea)

//  3. creata a arry of city add ["mumbai", "berlin"] add "NY" to it
const cities = ["Mumbai","Berlin"]
cities.push("NY")
console.log(cities)

// 4. creta an array teaorder remove last element and store it in a variable lastorder and print it 
const teaOrder = ["chai", "iced tea", "matcha", "Earl tea"]
const lastOrder = teaOrder.pop()
console.log(lastOrder)

// 5. creta an arry popularTea containing "green tea", "oolong tea", "chai" creating a soft copy of this array name softCopyTea.
const popularTea =["green tea", "oolong tea", "chai "]
softCopyTea = popularTea
console.log("origrnal array = ", popularTea)
console.log("the soft copy of the array is = ",softCopyTea)

// 6. create a hard copy of an array of top cities like berlin singapore ny 
const topCities = ["Berlin", "Singapore", "NY", "America"]
const hardCopy = [...topCities]
topCities.pop()
console.log("original array ", topCities)
console.log("hard copy", hardCopy)

// 7.you have two array 'europianCities' containg "paris" and "rome" and 'asianCities' containnig "Tokoyo", "berlin" merger thoso array into new array named merged cities 
const europianCities = ["paris", "rome"]
const asianCities = ["tokoyo", "berlin"]
const mergerCIties = europianCities.concat(asianCities)
console.log(mergerCIties)

// 8. you have  and of some lenght named teamenu find the length of an array and store it into a variable menu lenght 
const teaMenu = ["chai", "oolong tea", "green tea", "masala tea", "earl tea", "lemon tea"]
const menuLenght = teaMenu.length
console.log(menuLenght)

// 9. you have an array of cityBucketList which contain "Kyoto", "London", "Capetown", "voncover" check if the london is in the list "isLondonInList" store it in the varibale
const cityBucketList = ["Kyoto", "London", "Capetown", "voncover"];
const isLondonInList = cityBucketList.includes("London")
console.log(isLondonInList)