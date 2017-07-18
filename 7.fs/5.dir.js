const fs = require('fs');
//创建目录,必须要父级才能有儿子
// fs.mkdirSync('parent');
// fs.mkdir();
//删除目录
// fs.rmdirSync('parent');
function makep(path) {
//    parent
//    parent/child
//    parent/child/child
    var ary = path.split('/');
    var str = '';
    ary.forEach(function (item, index) {
        let temp = ary.slice(0, index + 1).join('/');
        //先判断目录是否存在，existsSync判断目录是够存在
        var flag = fs.existsSync(temp);
        if(!flag){
            fs.mkdirSync(temp);
        }
    })
}
makep('parent/child/child/son');