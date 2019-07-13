// by Value & by Reference


/*
//by Value
let x = 5
let y = x
y = 6
console.log(x)
*/



//by Reference
let x = {
    name: 'mostafa'
}
let y = x
y.name = 'ali'
console.log(x)