
let arr = [6, 5, 4, 3, 2, 1, 12]

//sort() change
arr.sort()

console.log(arr.sort(function (a, b) {
    /*
        * 0
        * + ==> b
        * - ==> a
    */
    if (a < b) return -1
    else if (a > b) return 1
    else return 0

}))

console.log(arr.sort((a, b) => {
    /*
        * 0
        * + ==> b
        * - ==> a
    */
    return a - b // or reverse b - a

}))

console.log(arr.sort((a, b) => a - b ))