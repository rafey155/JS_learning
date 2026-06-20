const arr = [1,2,3,4,5]

let ans = arr.map((num)=>{
    return num*num
})

// console.log(ans)

let brr = [1,2,3,4,5,6]
let Ans = brr.filter((number) =>{
    return number % 2 === 0
})
console.log(Ans)

let number = [10,20,30,40]
let rst = number.reduce((acc, cur)=>{
    return acc + cur
}, 0)
console.log(rst)