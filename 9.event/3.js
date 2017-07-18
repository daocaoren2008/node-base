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
    if(this._events[eventName]){
        this._events[eventName].forEach((item)=>{ //箭头函数没有this指向，内部的this指向的是外部的this
            item.apply(this,args); //将参数一个个传入进去
        });
    }
};
Man.prototype.once = function (eventName,callback) {
    //等待callback触发完成后在去掉
    function one() { //最终触发的是one方法，给one方法传递的参数要传递给callback
        callback.apply(this,arguments);
        this.removeListener(eventName,one);//当执行完后干掉one函数
    }
    one.g = callback; //{"有钱了":[one.g=callback]}
    this.on(eventName,one);
    //要在one方法上体现出 one是谁的one
};
Man.prototype.removeListener = function (eventName,callback) {
    //{'有钱':['买车','买包']}
    if(this._events[eventName]){
        this._events[eventName] = this._events[eventName].filter(function (item) {
            return item!=callback&&item.g!=callback; //有一个为false都要删除掉
            //返回true表示留下，返回false表示不要，返回一个新数组
        });
    }
};
var man = new Man();
function buyCar(who) {
    console.log('买车'+who);
}
function buyBag(who) {
    console.log('买包'+who);
}
man.on('有钱了',buyCar);
// man.on('有钱了',buyBag);//绑定一次 触发多次触发多次
man.once('有钱了',buyBag);//绑定一次 触发多次只执行一次 原理 触发一次将自己从数组中移除掉
man.removeListener('有钱了',buyCar);//移除事件的绑定，在触发有钱事件的时候不会执行买车
man.removeListener('有钱了',buyBag);
man.emit('有钱了','妹子');
man.emit('有钱了','妹子');
man.emit('有钱了','妹子');
