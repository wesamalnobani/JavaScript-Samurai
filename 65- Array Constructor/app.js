/*
let a = Array(1, 2, 3)
console.log(a)
*/
/*
let a = Array.of(1)
console.log(a)
*/
let a = Array.from('hello')
console.log(a)

let b = Array.from({length: 5})
console.log(b)

let c = Array.from({length: 50}, (e, i) => i)
console.log(c)