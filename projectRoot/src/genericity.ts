// function identity<T>(arg: T): T {
//   return arg;
// }

// function identity2(arg: any): any {
//   return arg;
// }

// function identity3<A>(params: A): A {
//   return params
// }

// let output = identity3<string>("myString");

// let output2 = identity("myString");


// interface Lengthwise {
//   length: number;
// }

// function loggingIdentity<T extends Lengthwise>(arg: T): T {
//   console.log(arg.length);  // Now we know it has a .length property, so no more error
//   return arg;
// }