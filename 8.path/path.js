//也是核心模块
var path=require('path');
//拼出一个绝对路径，不考虑目录应该是\还是/，
//1.join
console.log(path.join(__dirname,'1.js'));
//拼出一个上级的路径
console.log(path.join(__dirname,'..','1.js'));
//
//2.resolve
console.log(path.resolve('1.js'));
//join和resolve可以互换