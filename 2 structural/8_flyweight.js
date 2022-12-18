class Car {
    constructor(model, price) {
        this.model = model
        this.price = price
    }
}

class CarFactory {
    constructor() {
        this.cars = []
    }

    create(model, price) {
        const candidate = this.getCar(model)
        if (candidate) {
            return candidate
        }
        const newCar = new Car(model, price)
        this.cars.push(newCar)
        return newCar
    }

    getCar(model) {
        return this.cars.find(car => car.model === model)
    }
}

const factory = new CarFactory()

const opel = factory.create('opel', '15000$')
const honda = factory.create('honda', '30000$')
const honda2 = factory.create('honda', '60000$')

console.log(opel)
console.log(honda)
console.log(honda2)

console.log(honda === honda2)


