//1.固定大小，创建buffer有三种形式
//可以放长度，字符串，数组
// 1）放长度
var buffer = new Buffer(100);//随机创建100个大16进制，不干净
// buffer.fill(0)//将每个16进制填成0
//正常我们是吧内容读取到buffer中，
//buffer可以和字符串进行转换
console.log(buffer.toString());
// node默认不识别GBK编码
//2）.放字符串
var buffer = new Buffer('珠峰');//
console.log(buffer);//汉字占3个字节
//3）.放数组，如果放置的书大于255，则对256取模，如果给的是负数则加256，如果不识别则为0
var buffer = new Buffer([100, 101, 102]);
console.log(buffer);

//用法，非常像数组，每个buffer中村的都是内容空间（像二维数组）


var buffer = new Buffer(12);//12个长度
//string, offset, length, encoding
buffer.write('珠峰');
buffer.write('培训', 6);
console.log(buffer.toString());

//buffer的复制
var buffer = new Buffer(12);
var buf1 = new Buffer('珠峰');
var buf2 = new Buffer('培训');
//targetBuffer//目标buffer, targetStart//目标的开始, sourceStart//源的开始, sourceEnd//源的结束不包括结束
buf1.copy(buffer, 0, 0, 6);//source包前不包后
buf2.copy(buffer, 6, 0, 6);
console.log(buffer.toString());
//list, totalLength长度可不传，如果过大，超出区域fill成0，过短则将内容填满即可
console.log(Buffer.concat([buf1, buf2], 12).toString());

/*//模拟buffer的concat
/!**
 * @param list 传入一个buffer数组
 * @param totalLength 总长度 可传可不传
 *!/
Buffer.myConcat = function (list, totalLength) {
    //1.如果没传，算出总长度，构建buffer，将数组中的每一个buffer拷贝上去  forEach
    if (!(list instanceof Array))return;
    var  len = 0,start=0;

    list.forEach(function (item, index, input) {
        len += item.length;
    });
    totalLength = totalLength < len  ? totalLength:len;
    var buffer = new Buffer(totalLength);

    list.forEach(function (item, index, input) {
        item.copy(buffer,start+item.length);
    });

    //2.判断totalLength有没有传，如果传了构建一个大buffer,将buf1,和buf2拷贝上去 copy
    //3.将过长的部分截取掉 slice
};
console.log(Buffer.myConcat([buf1, buf2]).toString());*/
