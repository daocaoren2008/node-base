## global
- process
    - nextTick 下一队列（当前队列的底部）
    - process.pid 进程的id
    - process.kill() 杀死进程
    - process.cwd() 当前工作目录（__dirname不可以更改的）
    - process.exit() 退出进程
- Buffer
- setTimeout / clearTimeout
- setInterval / clearInterval
- setImmediate / clearImmediate
- console
    - console.log/error/info/warn/time/timeEnd

## __dirname/__filename

## 模块化
- cmd(seajs)就近依赖  amd(requirejs) 依赖前置 
- commonjs (node) 读写文件io操作 
- 有利于分工协作，
- 高内聚，低耦合
- 实现代码复用

> 闭包，命名空间(不可能完全避免命名冲突，调用过长)

## 模块化
- 定义模块（创建一个js文件）
- 使用模块（require）
- 导出模块（exports / module.exports）



