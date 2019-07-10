

let x = 5

//1
/*
function increment(n) {
    return ++n
}
console.log(x)
increment(x)
console.log(x)
*/

//2
function increment(n) {
    return ++n
}
console.log(x)
x = increment(x)
console.log(x)