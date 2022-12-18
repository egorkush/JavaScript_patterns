class Employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }

    responsibilities() {}

    work() {
        return `${this.name} performs ${this.responsibilities()}`
    }

    getPaid() {
        return `${this.name} has a salary of ${this.salary} dollars`
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary)
    }

    responsibilities() {
        return `code writing`
    }
}

class Tester extends Employee {
    constructor(name, salary) {
        super(name, salary)
    }

    responsibilities() {
        return `code testing`
    }
}

const developer = new Developer('Egor', 1200)
const tester = new Tester('Irina', 800)

// console.log(developer.work())
console.log(tester.work())
console.log(tester.getPaid())
console.log(tester.responsibilities())