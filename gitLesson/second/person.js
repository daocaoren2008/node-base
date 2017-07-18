function Person() {

}
Person.prototype.eat = function () {
    console.log('吃饭')
}
Person.prototype.home = ['大连', '沈阳', '长春', '哈尔滨'];
//1、exports {}
console.log(exports == this);
exports.Person = Person;
