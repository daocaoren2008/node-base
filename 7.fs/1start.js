//file system 文件夹 目录 文件 模块
const fs = require('fs');
//fs中的方法同步和异步同时出现，能用异步绝不用同步，因为同步会阻塞程序运行。
//看是否有回调
let result = fs.readFileSync('./test.txt');
//fs默认读取的内容是buffer类型
console.log(result);

var result1 = fs.readFileSync('./test.txt','utf8');
console.log(result1);
