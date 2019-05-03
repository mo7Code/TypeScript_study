// let z = 100;

// function addToZ(x, y) {
//   if (z) {
//     return x + y + z;
//   } else {
//     let z = 345;
//     return z
//   }
// }


// let myAdd: (baseValue: number, increment: number) => number =
//   function (x: number, y: number): number { return x + y; };

// // let 函数名: (输入值1,输入值2) => 返回类型 = fun(形参1,形参2) : 输出类型 {}


// function buildName({ firstName, lastName }: { firstName: string; lastName: any; }) {
//   return firstName + " " + lastName;
// }

// function buildName2s(firstName, lastName) {
//   return firstName + " " + lastName;
// }

// function buildName2sxx(firstName, lastName?: String) {
//   return firstName + " " + lastName;
// }


// function buildName(firstName: string, ...restOfName: string[]) {
//   console.log(...restOfName);

//   return firstName + " " + restOfName.join(" ");
// }

// let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");


// console.log(employeeName);


//重载

// let suits = ["hearts", "spades", "clubs", "diamonds"];

// function pickCard(x): any {
//   // Check to see if we're working with an object/array
//   // if so, they gave us the deck and we'll pick the card
//   if (typeof x == "object") {
//     let pickedCard = Math.floor(Math.random() * x.length);
//     return pickedCard;
//   }
//   // Otherwise just let them pick the card
//   else if (typeof x == "number") {
//     let pickedSuit = Math.floor(x / 13);
//     return { suit: suits[pickedSuit], card: x % 13 };
//   }
// }

// let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
// let pickedCard1 = myDeck[pickCard(myDeck)];
// alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

// let pickedCard2 = pickCard(15);
// alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);


let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: { suit: string; card: number; }[]): number;

function pickCard(x: number): { suit: string; card: number; };

function pickCard(x): any {
  // Check to see if we're working with an object/array
  // if so, they gave us the deck and we'll pick the card
  if (typeof x == "object") {
    let pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
  }
  // Otherwise just let them pick the card
  else if (typeof x == "number") {
    let pickedSuit = Math.floor(x / 13);
    return { suit: suits[pickedSuit], card: x % 13 };
  }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
