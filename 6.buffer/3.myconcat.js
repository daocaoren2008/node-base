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
var buf1 = new Buffer('珠峰');
var buf2 = new Buffer('培训');
console.log(Buffer.myConcat([buf1, buf2]).toString());