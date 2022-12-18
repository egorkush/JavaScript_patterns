class User {
    constructor(name) {
        this.name = name
        this.room = null
    }

    send(message, to) {
        this.room.send(message, this, to)
    }

    receive(message, from) {
        console.log(`${from.name} => ${this.name} : ${message}`)
    }
}

class ChatRoom {
    constructor() {
        this.users = {}
    }

    register(user) {
        this.users[user.name] = user
        user.room = this
    }

    send(message, from, to) {
        if (to) {
            to.receive(message, from)
        } else {
            Object.keys(this.users).forEach(key => {
               if (this.users[key] !== from) {
                   this.users[key].receive(message, from)
               }
            })
        }
    }
}

const person1 = new User('Egor')
const person2 = new User('Igor')
const person3 = new User('Elena')

const room = new ChatRoom()

room.register(person1)
room.register(person2)
room.register(person3)

person1.send('Hello, Elena!', person3)
person3.send('Hello, Igor!', person2)

person2.send('Hello, everybody!')

