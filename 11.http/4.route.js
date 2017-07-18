var http = require('http');
var fs = require('fs');
var url = require('url');
var mime =require('mime');
http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname=='/'){
        res.setHeader('content-type','text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(res);//以流的方式，读取文件并写给res。pipe会自动执行fs的end。
    }else{
        fs.exists('.'+pathname,function (flag) {
            if(flag){
                res.setHeader('content-type',mime.lookup(pathname)+';charset=utf8');//mime第三方模块检测文件的mime类型
                fs.createReadStream('.'+pathname).pipe(res);
            }else {
                res.statusCode=404;
                res.end('Not Found')
            }
        })
    }
}).listen(3000,function () {
    console.log('server on 3000')
});//建议不要使用3000以下的端口，容易被占用