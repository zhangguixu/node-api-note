
// 监听uncaughtException可以处理的错误

// process.on("uncaughtException", (error) => {
//     console.log(error)
//     return true;
// })

// throwError()


// 最佳的实践 domain + uncaughtException + cluster
/** 
 *  思路是当
 *    work运行在domain上下文中，
 * 
*/
const cluster = require('cluster');
const PORT = +process.env.PORT || 1337;

if (cluster.isMaster) {
    cluster.fork();
    cluster.fork();
  
    cluster.on('disconnect', (worker) => {
      console.error('disconnect!');
      cluster.fork();
    });
} else {
    const domain = require("domain")
    const server = require("http").createServer((req, res) => {
        const d = domain.create()
        d.on("error", (err) => {
            console.error(`error ${er.stack}`);

            // 这里子进程发生了错误
        })
    })
    server.listen(PORT);
}