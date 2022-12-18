class Database {
    constructor(data) {
        if (Database.instance) {
            return Database.instance
        }
        this.data = data
        Database.instance = this
    }
}

class Database2 {
    constructor(name) {
        if (Database2.instance) {
            return Database2.instance
        }
        Database2.instance = this
        this.name = name
    }
}

const mongo = new Database('mongoDB')
const chart = new Database('ggg')

const name1 = new Database2('Igor')
const name2 = new Database2('Egor')

// console.log(name1)
// console.log(name2)
//
// console.log(name1 === name2)

// console.log(mongo)
// console.log(chart)

// console.log(mongo === chart)


class Car {
    constructor(model) {
        if (Car.instance) {
            return Car.instance
        }
        Car.instance = this
        this.model = model
    }
}

const car1 = new Car('opel')
const car2 = new Car('Mercedes')

console.log(car1)
console.log(car2)

console.log(car1 === car2)














