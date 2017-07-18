//如果是自己写的文件 需要使用相对路径引用
var Person = require('./person').Person;
console.log(Person)//
//require 是一个同步方法，有回调函数的一般是异步，有返回值的一般是同步
var person = new Person();
