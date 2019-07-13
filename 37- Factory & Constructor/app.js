
// Factory 
/*
function Person (name, age) {
    return {
        name,
        age
    }
}

let me = Person ('mostafa', 20) 
console.log (me)
*/

// Constructor
function Person (name, age) {
    this.name = name
    this.age = age
}

let me = new Person('mostafa', 20)
console.log (Person)