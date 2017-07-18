var http = require('http');
var fs = require('fs');
var url = require('url');
var mime = require('mime');
var querystring = require(querystring);
http.createServer(function (req, res) {
    var urlObj = url.parse(req.url, true);
    var pathname = urlObj.pathname;
    if (pathname == '/') {
        res.setHeader('Content-Type', 'text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(res);
    } else if (pathname == '/login') {
        var str = '';
        req.on('data', function (data) {
            str += data;
        });
        req.on('end', function () {
            //    node 自带querystring方法
            var obj = querystring.parse(str);
            /*            console.log(obj);
             console.log(querystring.stringify(obj,'&&','=='));//第一个参数是要转换的对象，第二个参数是字段之间的分割符，第三个是key,value之间的分隔符*/

            res.statusCode=302;//临时重定向，用来跳转页面。
            if(obj.name=='admin'){
                res.setHeader('Location','http://www.baidu.com');//跳转页面的地址
            }else {
                res.setHeader('Location','http://www.qq.com');//跳转页面
            }
        })
    } else {
        fs.exists('.' + pathname, function (flag) { //先判断文件是否存在
            if (flag) {
                res.setHeader('Content-Type', mime.lookup(pathname) + ';charset=utf8');
                fs.createReadStream('.' + pathname).pipe(res);
            } else {
                res.statusCode = 404;
                res.end('NotFound');
            }
        });
    }
}).listen(3000);
function format(str) {
    var reg = /([^&#?=]+)=([^&#?=]+)/g;
    var obj = {};
    str.replace(reg, function () {
        obj[arguments[1]] = arguments[2];
    });
    return obj;
}
