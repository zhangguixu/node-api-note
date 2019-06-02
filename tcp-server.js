/**
 *  net echo server
 */
const net = require("net")

const server = net.createServer((socket) => {
    socket.on("close", (err) => {
        console.log("server close")
    })
    socket.on("data", (data) => {
        console.log(`server rec ${data}`)
        socket.write(data)
        socket.end()
    })
})

server.listen(8877)

console.log(`server listen 8877: ${server.listening}`)