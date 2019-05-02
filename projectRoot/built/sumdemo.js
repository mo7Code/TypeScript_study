/*
 * @LastEditors: Mark
 * @Description: In User Settings Edit
 * @Author: Mark
 * @Date: 2019-05-02 23:07:37
 * @LastEditTime: 2019-05-02 23:20:00
 */

// function sum(list) {
//   let retursUm = 0;
//   for (let i = 0; i < list.length; i++) {
//     const el = list[i];
//     retursUm += el;
//   }
//   return retursUm;
// }

let numArr = [24, 56, 78, 93, 12, 0.2345, 56];

function sumdy(list, index) {
  let dy_sum = 0;
  let yu_sum = 0;
  for (let i = 0; i < list.length; i++) {
    if (i % 2 === 0) {
      dy_sum += list[i];
    } else {
      yu_sum += list[i];
    }
  }
  let chu_sum = dy_sum / yu_sum

  return chu_sum - list[index];
}

console.log(sumdy(numArr, 2));



