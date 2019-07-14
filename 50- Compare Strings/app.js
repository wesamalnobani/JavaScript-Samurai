

let s1 = 'hello'
let s2 = 'world'

console.log(s1 < s2)
console.log(s2 < s1)

s1.localeCompare()
console.log(s1.localeCompare(s2))
console.log(s2.localeCompare(s1))