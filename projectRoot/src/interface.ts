interface SquareConfig {
  color?: string,
  width?: number,
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({ color: "black" });


// interface SquareConfig {
//   color: string;
//   width?: number;
//   [propName: string]: any;
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
//   let Obj = { ...config, area: 123 };
//   return Obj;
//   // ...
// }

// // let mySquare = createSquare({ color: "red", width: 100, opacity: 0.5 });

// let squareOptions = { color: "red", width: 100, are: 100, asd: 123 };
// let mySquare = createSquare({ color: "red", width: 100, are: 100, asd: 123 });


// 函数类型

// interface SearchFunc {
//   (subscribe: string, source?: string, ): boolean;
// }

// let mySearch: SearchFunc = (subString, source) => {
//   let result = source.search(subString);
//   return result > -1;
// }

// mySearch('asd');

// 可索引类型

// interface StringArray {
//   [index: number]: string;
// }

// let myArray: StringArray = ["bob", '123'];


// class Animal {
//   name: string;
// }
// console.log(new Animal());

// class Dog extends Animal {
//   breed: string;
// }
// console.log(new Animal());

// console.log(new Dog());

// interface Counter {
//   (start: number): string;
//   interval: number;
//   reset(): void;
// }

// function getCounter(): Counter {
//   let counter = function (start: number): void { } as Counter;
//   counter.interval = 123;
//   counter.reset = function () { };
//   return counter;
// }



// console.log(getCounter());



