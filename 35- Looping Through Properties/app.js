let me = {
    name: 'mostafa',
    age: 20
}

for (let prop in me) console.log(prop + ' ' + me[prop])

console.log('name' in me)
console.log('city' in me)