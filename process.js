/**
 *  process 模块
 *  
 */
process.env

// 进程监控
process.cpuUsage()

process.memoryUsage()

// 通常会对比setTimeout: 加入时间事情队列
// setImmediate  在当前回合的Node.js事件循环结束时调用的函数。
// 在下次循环开始就执行，在任何i/o事件
// 输出顺序为 next tick => set time out => set immdediate
// 全在第一轮事件循环执行，按照定义可以推测出执行的顺序
setTimeout(() => {
    console.log("set time out ")
}, 0)

setImmediate(() => {
    console.log("set immdediate")
})

process.nextTick(() => {
    console.log("next tick")
})


// 进程退出
process.exit(-1)


