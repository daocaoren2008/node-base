const fs = require('fs');
fs.readFileSync()
//1. 同步可以使用try catch，error-first,将回调函数的第一个参数作为错误参数
//2.结果放到回调函数里
// readFile是异步读取的
var school = {};
var str = '';
/*
//同步操作
fs.readFile('./name.txt', 'utf8', function (err, data) {
    school.name=data;
    fs.readFile('./age.txt', 'utf8', function (err, data) {
        school.age=data;
        console.log(school);
    });
});
*/
//异步操作，解决异步的方法就是通过回调来处理。看所有的异步都执行完才执行最后的操作。
fs.readFile('./name.txt', 'utf8', function (err, data) {
    school.name=data;
    out();
});
fs.readFile('./age.txt', 'utf8', function (err, data) {
    school.age=data;
    out();
});
function out() {
    if(Object.keys(school).length==2)
        console.log(school);
}

