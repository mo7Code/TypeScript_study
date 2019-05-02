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
// // let mySquare = createSquare({ color: "red", width: 100, opacity: 0.5 });
// let squareOptions = { color: "red", width: 100, are: 100, asd: 123 };
// let mySquare = createSquare({ color: "red", width: 100, are: 100, asd: 123 });
// 函数类型
