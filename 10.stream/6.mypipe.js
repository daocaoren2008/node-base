var fs = require('fs');

var rs = fs.createReadStream('./name.txt', {highWaterMark: 4});
var ws = fs.createWriteStream('./name1.txt', {highWaterMark: 1});
//2.监听rs.on('data'),wr.write(),判断是否可写，flag
//3.如不能写，暂定读取rs.pause()
//4.等待ws.on('drain'),恢复读取,rs.resume()
//5.等待读取完毕后，rs.on('end'),关闭可写流ws.end（）
rs.on('data',function (data) {
    var flag=ws.write(data);
    if(!flag) rs.pause();
});
ws.on('drain',function () {
   rs.resume();
});
rs.on('end',function () {
   ws.end();
});