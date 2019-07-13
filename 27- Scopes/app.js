let x = 5
let y = 7
function logX() {
    console.log(x)
    let y = 6
    function f2() {
        console.log(y)
    }
    f2()
}
logX()
console.log(y)