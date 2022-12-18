class MyIterator {
    constructor(data) {
        this.data = data
        this.index = 0
    }

    [Symbol.iterator]() {
        return {
            next: () => {
                if (this.index < this.data.length) {
                    return {
                        value: this.data[this.index++],
                        done: false
                    }
                } else {
                    this.index = 0
                    return {
                        value: void 0,
                        done: true
                    }
                }
            }
        }
    }
}

// const iterator = new MyIterator(['This', 'is', 'iterator'])
//
// for (let val of iterator) {
//     console.log('Value: ', val)
// }

const iterator = new MyIterator(['This', 'is', 'iterator'])
const x = iterator[Symbol.iterator]()

console.log(x.next().value)
console.log(x.next().value)
console.log(x.next().value)




// function* generator(collection) {
//     let index = 0
//     while(index < collection.length) {
//         yield collection[index++]
//     }
// }
//
// const y = generator(['This', 'is', 'iterator'])
// console.log(y.next().value)
// console.log(y.next().value)
// console.log(y.next().value)
// console.log(y.next().value)





