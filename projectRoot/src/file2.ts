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
