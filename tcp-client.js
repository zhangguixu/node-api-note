/**
 *  net client
 */
const net = require("net")

const client = net.createConnection({port: 8877}, () => {
    console.log(`connet to server 8877`)
    client.write(`hello world\n`)
})

client.on("data", (data) => {
    console.log(`client rec ${data}`)
})

client.on("close", (err) => {
    console.log("close")
})

