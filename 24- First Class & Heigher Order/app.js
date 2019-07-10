/*
function power(x = 1, n = 0) {
    let r = 1
    for (let i = 0; i < n; i++) r *= x
    return r
}
console.log (power(2, 3))
*/

// What Mean First Class


//1
/*
let MyPower = function (x = 1, n = 0) {
    let r = 1
    for (let i = 0; i < n; i++) r *= x
    return r
}
console.log (MyPower(2, 3))
*/

//2
function returnPower() {
    return function (x = 1, n = 0) {
        let r = 1
        for (let i = 0; i < n; i++) r *= x
        return r
    }
}
let MyPower = returnPower()
console.log (MyPower(2, 3))