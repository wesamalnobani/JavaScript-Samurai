//1
/*
let obj = {
    name: 'mostafa',
    age: 20,
    walk () {
        console.log('walked')
    },
    getInfo () {
        console.log(obj.name + ' ' + obj.age)
    }
}

// Add

obj.city = 'Amman'

console.log(obj)

delete obj.city
console.log(obj)

obj.walk()

obj.getInfo()
*/

let obj = {
    name: 'mostafa',
    age: 20,
    walk () {
        console.log('walked')
    },
    getInfo () {
        let that = this //Solutions
        function printInfo () {
            console.log(that.name + ' ' + that.age)
        }
        printInfo ()


        // or use arow function
        let printInfo2 = () => {
            console.log(this.name + ' ' + this.age)
        }
        printInfo2 ()
    }
}

obj.getInfo()