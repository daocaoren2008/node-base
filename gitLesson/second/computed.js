var calc = {
    "+": function (a, b) {
        return a + b;
    },
    "-": function (a, b) {
        return a - b;
    }
};
//在useComputed中是用calc方法
// exports.calc = calc;
// exports= calc;//错误的写法，默认require收到的是module.export，export指向的不是一个对象了。所以报错
module.exports = calc;

