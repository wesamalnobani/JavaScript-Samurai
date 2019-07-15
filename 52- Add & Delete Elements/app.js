
let a = [1, 2, 3, 4, 5, 6]

// add last
a.push(1)

console.log(a)

a.push(1, 2, 3)

console.log(a)

//add first
a.unshift()
console.log()

// delete last
a.pop()

//delete first
a.shift()

// splice(Number Index, Number element, add element)
a.splice(3, 0 , 'hello', 'world')

console.log(a)