var fs = require('fs');
//同步拷贝
function copySync(souce, target) {
//readFileSync + writeFileSync
    if (!souce)return;
    var str = fs.readFileSync(souce, 'utf8');
    fs.writeFileSync(target, str, 'utf8');
}
copySync('./name.txt', './n.txt');
//异步拷贝
function copy(souce, target) {
//readFile + writeFile
    if(!souce)return;
    var str=fs.readFile(souce,function (err,data) {
        if(err){
            console.log(err)
        }else {
            fs.writeFile(target,data,function (err) {
              if(err){
                  console.log(err)
              }
            })
        }
    })
}
copy('./name.txt','./n1.txt');
