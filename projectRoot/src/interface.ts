// interface SquareConfig {
//   color?: string;
//   width?: number;
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
//   let newSquare = { color: "white", area: 100 };
//   if (config.color) {
//     newSquare.color = config.color;
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width;
//   }
//   return newSquare;
// }

// let mySquare = createSquare({ color: "black" });


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

// let mySquare = createSquare({ color: "red", width: 100, opacity: 0.5 });




let numArr = [24, 56, 78, 93, 12, 0.2345, 56];

function sum(list) {
  let retursUm = 0;
  for (let i = 0; i < list.length; i++) {
    const el = list[i];
    retursUm += el;
  }
  return retursUm;
}

console.log(sum(numArr));


