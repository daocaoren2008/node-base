const fs = require('fs');
//1.返回的是可写流
//2.highWaterMark: 16384,  1024b*16
//3.默认写入文件的编码格式是utf8
var ws = fs.createWriteStream('./name1.txt',{highWaterMark:1});
//4.写中的两个方法write end
var flag = ws.write('1',function () {
    console.log('写入一次');
});//字符串或者buffer类型
var flag = ws.write('1',function () {
    console.log('写入一次');
});//字符串或者buffer类型
//flag表示是否还能写入，返回false东西也不会丢失，没有写入的东西会放到内存中，等完成之后接着写。但需要些的太多，内存可能会占满。
ws.end('1');//如果end中传入参数，会默认调用write方法
//关闭文件，写也是异步的，只要调用end方法，会将没写完的内容全部写完，之后关闭


