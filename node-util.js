/**
 *  node util 可能有用的函数
 */
const util = require("util")

console.log(util.format("%o", {a: 1}))

// Please note that util.inspect() is a synchronous method that is mainly intended as a debugging tool. 
// Some input values can have a significant performance overhead that can block the event loop. 
// Use this function with care and never in a hot code path
// 将对象转成字符串输出
console.log(util.inspect({a: {b : {c: 1}}}))

console.log(util.isDeepStrictEqual({a: 1, b: 2}, {a: "1", b: 2}))
// typeof util.isDeepStrictEqual

let setTimeoutPromise = util.promisify(setTimeout)

async function test() {
    await setTimeoutPromise(100)
    console.log("settimeout promise")
}

test()


// util判断类型 util.types