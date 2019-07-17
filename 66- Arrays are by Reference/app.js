/*
let a = [1, 2, 3]
let b = a
b[0] = 5
console.log(a[0])
*/

//1
/*
let a = [1, 2, 3]
let b = Array(a)[0]
console.log(b)
*/

//2
/*
let a = [1, 2, 3]
let b = Array.of(a)[0]
console.log(b)
*/

//3
let a = [1, 2, 3]
let b = Array.from(a)
b[0] = 5
console.log(a[0])