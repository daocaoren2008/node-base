//setTimeout 唯一能设置时间的（服务员第二个小本上）

//process.nextTick 同步代码执行后将会执行的方法(服务员第一个小本尾部）

//setImmediate 异步在nextTick后执行（服务员第二个小本）
// 执行顺序
// 同步 > process.nextTick >setImmediate >=setTimeout (不设置时间可能会比setImmediate早，也可能晚)
//__dirname
//在文件运行的过程中，会给这个文件套移仓闭包函数，函数中有形参，
/*
(function (__dirname,__filename,require,exports,modules) {
    this//在闭包中被修改了。
    2.global.js
})();
*/
