/**
 * Created by meijuan on 2017/2/26.
 */
//console.log(this)后台直接访问this是{}
//(function(){console.log(this)})()后台闭包中的this是global
var a = 100;
//通过var 声明的不能直接绑定在global上。
console.log(a);
b = 200;//在global上
//正常声明要直接申明在global上
console.log(global.c = 1);
// node基本全部支持es6，只是不支持import,export

//console.log等执行的顺序是不一定的。
console.log()
console.error()
console.info()
console.warn()
console.dir()

//time和timeEnd必须传入相同的字符串，用来测试两者之间的代码执行的时间
console.time('str');
var obj={};
for (var key in obj) {

}
console.timeEnd('str');

//setTimeout
function eat(who,foods) {
    console.log(this)//这里的this指的是setTimeout自己
    console.log(who,'吃'+foods);
}
setTimeout(eat,1000,'小猪','冰淇淋')//es6支持,从第二个函数以后都是给回调函数传的参数。
setTimeout(eat.bind(global),1000,'小猪','冰淇淋')//bind可以改变this指向。
//异步，process.nextTick,setTimeout,setImmediate
//事件环，


