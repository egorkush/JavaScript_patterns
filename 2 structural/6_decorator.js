class Server {
    constructor(id, port) {
        this.id = id
        this.port = port
    }

    get url() {
        return `https://${this.id}:${this.port}`
    }
}

function aws(server) {
    server.isAWS = true
    server.awsInfo = function() {
        return server.url
    }
    return server
}

function azure(server) {
    server.isAZURE = true
    server.port += 500
    return server
}

const s1 = aws(new Server('12.34.56.78', 8080))
console.log(s1.isAWS)
console.log(s1.awsInfo())

const s2 = azure(new Server('98.87.76.12', 1000))

console.log(s2.isAZURE)
console.log(s2.url)
