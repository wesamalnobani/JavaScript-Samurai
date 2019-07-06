// Case 1
function power_1 (x, n) {
    let r = 1
    if (n == undefined) n = 0
    for (let i = 0; i < n; i++) r *= x
    console.log (r)
}
power_1(5, 3)

// Case 2

function power_2 (x = 1, n = 0) {
    let r = 1
    for (let i = 0; i < n; i++) r *= x
    console.log (r)
}
power_2 (5, 3)

// Case 3

function power_3 (x = 1, n = 0) {
    let r = 1
    for (let i = 0; i < n; i++) r *= x
    return r
}
console.log(power_3(5, 3)) 