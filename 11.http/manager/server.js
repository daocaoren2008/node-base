var http = require('http');
var fs = require('fs');
var url = require('url');
var mime = require('mime');
var user = [
    {userName: 'zfpx', passWord: '123', id: 1},
    {userName: 'wq', passWord: '456', id: 2},
];
http.createServer(function (req, res) {
    var urlObj = url.parse(req.url, true);
    var pathname = urlObj.pathname;

    if (pathname == '/') {
        res.setHeader('content-type', 'text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(res);//以流的方式，读取文件并写给res。pipe会自动执行fs的end。
    } else if (pathname == '/getUser') {
        res.end(JSON.stringify(user));
    } else if (pathname == '/addUser') { 
        var str='';
        req.on('data',function (data) {
            str+=data;
        })
        req.on('end',function () {
            
        })
    } else if (pathname == '/deleteUser') {
        var id = urlObj.query.id;
        user = user.filter(function (item) {
            return item.id != id;
        })
        res.end(JSON.stringify(user));
    } else {
        fs.exists('.' + pathname, function (flag) {
            if (flag) {
                res.setHeader('content-type', mime.lookup(pathname) + ';charset=utf8');//mime第三方模块检测文件的mime类型
                fs.createReadStream('.' + pathname).pipe(res);
            } else {
                res.statusCode = 404;
                res.end('Not Found')
            }
        })
    }
}).listen(3000, function () {
    console.log('server on 3000')
});//建议不要使用3000以下的端口，容易被占用