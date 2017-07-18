const fs = require('fs');
//writeFileSync writeFile 写没有返回值
//writeFileSync
//path, data, options,
// 写之前先清空，创建，仅写 (没有文件会创建)
//如果写入的是对象格式，需要JSON.stringify()
// fs.writeFileSync('./name.txt',new Buffer('888'));
//异步的写
fs.writeFile('./name.txt','hello',function (err) {

});
//追加的写
fs.appendFile('./name.txt','hello',function (err) {

});