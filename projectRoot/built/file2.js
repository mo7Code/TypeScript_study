var isShow = true;
var max = 123123;
var xxx = 'job job';
var list = [1, 2, 3, 4, 6];
//元组
var x;
x = ['1', 2];
//枚举
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
console.log(Color);
var c = Color.green;
var d = Color[2];
console.log('c', c);
console.log('d', d);
for (var i = 0; i < 3; i++) {
    var el = Color[i];
    console.log(el);
}
//never
function error(message) {
    throw new Error(message);
}
// error('123123')
//  Object
function create(o) {
}
create.abc = 123;
console.log('create.abc', create.abc);
// 类型断言
var someValue = 123123123;
var strLength = someValue.length;
console.log('strLength', strLength);
