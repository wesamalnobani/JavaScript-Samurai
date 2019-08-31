
// Object Constructor
function Person(name, age) {
    this.name = name
    this.age = age
    this.getInfo = function() {
        return this.name + ": " + this.age
    }
}
let p = new Person('wesam', 36)


// Inher
function Student(name, age, faculty) {
    Person.call(this)
    this.faculty = faculty
    this.getInfo = function() {
        return this.name + ": " + this.age + ": " + this.faculty
    }
}


let s = new Student("wesam", 36, "Accountant")




// Class
class PersonClass {
    name
    age

    constructor(name, age) {
        this.name = name
        this.age = age
    }

    getInfo() {
        return this.name + ": " + this.age
    }
}
 class StudentClass extends PersonClass {
    faculaty
    constructor(name, age, faculty) {
        //this.name = name
        //this.age = age
        super(name, age)
        this.faculty = faculty
    }
    getInfo() {
        return this.name + ": " + this.age + ": " + this.faculty
    }
 }

let sc = new StudentClass('wesam', 36, "Accountant")

