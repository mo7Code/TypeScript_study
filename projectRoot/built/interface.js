// interface SquareConfig {
//   color?: string;
//   width?: number;
// }
function getCounter() {
    let counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
console.log(getCounter());
