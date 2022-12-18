function networkFetch(url) {
    return `${url} - server response`
}

const cache = new Set()

const handler = {
    apply(target, thisArg, argArray) {
        const url = argArray[0]
        if (cache.has(url)) {
            return `${url} - cache response`
        } else {
            cache.add(url)
            return Reflect.apply(target, thisArg, argArray)
        }
    }
}


const proxiedFetch = new Proxy(networkFetch, handler)

console.log(proxiedFetch('https://www.google.com/'))
console.log(proxiedFetch('https://www.google.com/'))
console.log(proxiedFetch('https://www.google.com/'))


// console.log(handler.apply)
