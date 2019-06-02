/**
 *  event事件模块
 */

const EventEmitter = require("events")

class EE extends EventEmitter { }

let e = new EE()

// 触发事件的回调是同步的，因此的事件回调中使用process.nextTick或者setImmediate来让事件回调异步执行
e.on('event', () => {
    console.log('触发事件');
    setImmediate(() => {
        console.log("async execute")
    })
});
e.emit('event');
console.log("==")

// 使用箭头函数的时候，注意this指向

// setMaxListeners 设置最大数之后，超过了会进行打印警告
