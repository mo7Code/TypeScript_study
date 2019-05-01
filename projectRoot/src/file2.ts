let isShow: Boolean = true;


let max: Number = 123123;

let xxx: String = 'job job';


let list: Array<string | number> = [1, 2, 3, 4, 6];


//元组
let x: [string, number];

x = ['1', 2]

//枚举

enum Color { red, green, blue }

console.log(Color);

let c: Color = Color.green
let d: string = Color[2]
console.log('c', c);
console.log('d', d);

for (let i = 0; i < 3; i++) {
  const el = Color[i];
  console.log(el);

}

//never
function error(message: string): never {
  throw new Error(message);
}

// error('123123')

//  Object
function create(o: object | null) {
}

create.abc = 123;

console.log('create.abc', create.abc);
// 类型断言

let someValue: any = 123123123;

let strLength: number = (someValue as string).length;

console.log('strLength', strLength);


let obj: object = [];
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

console.info('解构')

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


type C = { a: string, b?: number };
console.log(c);

