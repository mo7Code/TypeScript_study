// interface SquareConfig {
//   color?: string;
//   width?: number;
// }
function getCounter() {
    let counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    console.log(counter(123));
    return counter;
}
console.log(getCounter());
