//发布订阅模式 一对多的关系 {'有钱了':["买车","买包"]}
function Man() {
    this._events = {};
}
Man.prototype.on = function (eventName,callback) {
    //查看当前是第一次还是不是第一次
    if(this._events[eventName]){
        this._events[eventName].push(callback); //第二次找到数组将新的函数放到映射关系内{'有钱了':[买包，买车]}
    }else{
        //第一次
        this._events[eventName] = [callback]; //{'有钱了':[买包]}
    }
};

Man.prototype.emit = function (eventName,...args) { //将剩余参数转换成数组
    //var args = Array.from(arguments).slice(1); //将类数组转换成数组
    // var args = [].slice.call(arguments,1);
    if (this._events[eventName]) {
        this._events[eventName].forEach((item) => {
            item.apply(this, args);
    });
    }
};

Man.prototype.once=function (eventName,callback) {
    //等待callback执行完后去掉，
    function one() {//最终触发的是One方法，给one方法传递的参数要传递给callback
        callback.apply(this.arguments);
        this.removeListener(eventName,one);//当执行完成后，从执行队列里移除one
    }
    this.on(eventName,one)

};
Man.prototype.removeListener = function (eventName, callback) {
    if (this._events[eventName]) {
        //fileter不会数组塌陷，生成新数组。
        this._events[eventName] = this._events[eventName].filter(function (item) {
           return item != callback;
            //返回true保留，返回false表示不要
        })
    }
};
var man = new Man();
function buyCar(who) {
    console.log('买车' + who);
}
function buyBag(who) {
    console.log('买包' + who);
}
man.on('有钱了', buyCar);
// man.on('有钱了', buyBag);//绑定一次 ，触发多次，执行多次
man.once('有钱了', buyBag);//绑定一次 ，触发多次，执行一次，（触发一次就把方法，从队列里移除）
man.removeListener('有钱了',buyCar);//移除
man.emit('有钱了', '妹子');
man.emit('有钱了', '妹子');
man.emit('有钱了', '妹子');