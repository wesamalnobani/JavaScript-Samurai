let arr = [1, 2, 3, 4]

let arr2 = [
    [1, 2, 3, 4, 5],
    [6, 7],
    [8, 9]
]

/*
for (let a of arr2) {
    for (let b of a) {
        console.log(b)
    }
}
*/

console.log(arr2[0][0]) 

for (let i = 0; i < arr2.length; i++) {
    for (let k = 0; k < arr2[i].length; k++) {
        console.log(arr2[i][k])
    }
}