// Maping
let arr = [6, 5, 4, 3, 2, 1, 12]

//arr.forEach(e => console.log(e))

/*
let newArr = arr.map(e => ++e)
console.log(arr)
console.log(newArr)
*/

//reduce()
console.log(arr.reduce((p, c) => p+c))

/*
    * p = 6 +6 = 14 + 1 = 15 + 3 = 18 + 5 = 23 + 12 = 35
*/


//reduceRight()
console.log(arr.reduceRight((p, c) => p+c))