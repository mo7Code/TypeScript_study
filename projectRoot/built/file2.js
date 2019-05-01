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
var obj = [];
console.log(obj);
//Symbol
// var myIterable = {}
// myIterable[Symbol.iterator] = function* () {
//   yield 1;
//   yield 2;
//   yield 3;
// };
// for (let i = 0; i < 10; i++) {
//   setTimeout(function () { console.log(i); }, 100 * i);
// }
// function foo() {
//   // okay to capture 'a'
//   return a;
// }
// 运行时应该抛出错误
// console.log('foo()', foo());
// let a: any;
//解构
console.info('解构');
// let [first, ...rest] = [1, 2, 3, 4];
// console.log(first); // outputs 1
// console.log(rest); // outputs [ 2, 3, 4 ]
// let input = [1, 2];
// let [first, second] = input;
// [first, second] = [second, first];
// console.log(first);
// console.log(second);
// interface Options { a: string; c: string; b: number }
// const o = {
//   a: "foo",
//   c: "bar"
// } as Options;
// function addObj() {
//   o.b = 123
// }
// addObj();
// // let { a, b }: { a: string, b: string } = o;
//渣渣类型转换
// function ajax(res: any) {
//   const Obj = res
//   const { a: any, b: cny }: { a: string, b: string } = Obj;
//   console.log(typeof any);
//   console.log(typeof cny);
// }
// ajax({
//   a: 123,
//   b: 456
// })
// // 默认值
// function func_name(any = 123) {
//   console.log(any);
// }
// func_name()
console.log("type C");
console.log(c);
