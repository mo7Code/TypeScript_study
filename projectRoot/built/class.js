// class Greeter {
//   greeting = 'hahahsx';
//   constructor(message?) {
//     console.log('message', message);
//     console.log('this', this);
//     console.log('this.greeting', this.greeting);
//     this.greeting = message;
//     console.log('this.greeting22', this.greeting);
//   }
//   greet() {
//     return "Hello," + this.greeting;
//   }
// }
// let greeter = new Greeter("word");
// console.log('greeter.greet()', greeter.greet());
// // let greeter2 = new Greeter("wordxxx");
// // console.log(greeter2.greet());
// class Dog extends Greeter {
//   bark() {
//     let str = 'Woof! Woof!' + this.greeting;
//     return str
//   }
// }
// let dog = new Dog('xxxxdog');
// console.log("dog", dog);
// console.log("dog.bark()", dog.bark());
/// 默认为 public
// class Animal {
//   private name: string;
//   private constructor(theName: string) { this.name = theName; }
//   private move(distanceInMeters: number) {
//     console.log(`${this.name} moved ${distanceInMeters}m.`);
//   }
// }
// new Animal("Cat").name
//理解 private 私有
// class Animal {
//   private name: string;
//   constructor(theName?: string) {
//     console.log("this.name", this.name);
//     this.name = theName;
//     console.log("this.name", this.name);
//   }
// }
// new Animal();
//存取器
// let passcode = "secret passcode";
// class Employee {
//   private _fullName: string;
//   get fullName(): string {
//     console.log("get");
//     return this._fullName + 123;
//   }
//   set fullName(newName: string) {
//     console.log("set");
//     console.log("newName", newName);
//     console.log("passcode", passcode);
//     if (passcode && passcode == "secret passcode") {
//       this._fullName = newName;
//     }
//     else {
//       console.log("Error: Unauthorized update of employee!");
//     }
//   }
// }
// let employee = new Employee();
// employee.fullName = "Bob Smith";
// if (employee.fullName) {
//   alert(employee.fullName);
// }
// 静态类
// class Grid {
//   static origin = { x: 0, y: 0 };
//   calculateDistanceFromOrigin(point: { x: number; y: number; }) {
//     console.log("1", Grid);
//     console.log('2', this);
//     console.log('3', Grid.origin);
//     console.log('4', this.origin);
//     let xDist = (point.x - Grid.origin.x);
//     let yDist = (point.y - Grid.origin.y);
//     return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
//   }
//   constructor(public scale: number) {
//     console.log('scale', scale);
//   }
// }
// let grid1 = new Grid(1.0);  // 1x scale
// console.log('5', grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
// 抽象类
// abstract class Department {
//   constructor(public name: string) {
//     this.name = name;
//   }
//   printName(): void {
//     console.log('Department name: ' + this.name);
//   }
//   abstract printMeeting(): void; // 必须在派生类中实现
// }
// class AccountingDepartment extends Department {
//   constructor() {
//     super('Accounting and Auditing xxxs'); // 在派生类的构造函数中必须调用 super()
//   }
//   printMeeting(): void {
//     console.log('The Accounting Department meets each Monday at 10am.');
//   }
//   generateReports(): void {
//     console.log('Generating accounting reports...');
//   }
// }
// let accountingDepartment = new AccountingDepartment();
// console.log(accountingDepartment);
//构造函数
class Greeter {
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    }
}
Greeter.standardGreeting = "Hello, there";
let greeter1;
greeter1 = new Greeter();
console.log('greeter1.greet()', greeter1.greet());
let greeterMaker = Greeter;
greeterMaker.standardGreeting = "Hey there!";
let greeter2 = new greeterMaker();
console.log('greeter2.greet()', greeter2.greet());
