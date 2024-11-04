// function smallest(n: number): any {
//   function numberToArr(number: number) {
//     return Array.from(String(number), Number);
//   }
//   function arrToNumber(arr: number[]) {
//     return Number(arr.join(""));
//   }
//   function smallestElem(number: number) {
//     return Math.min(...numberToArr(number));
//   }
//   function smallestElemIndex(arr: number[]) {
//     return arr.findIndex((num: number) => num == smallestElem(n));
//   }
//   function swapElem(arr: number[], index1: number, index2: number) {
//     [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
//     return arr;
//   }
//   //CURRENT МАССИВ ИЗ ИСХОДНОГО ЧСИЛА
//   let array = numberToArr(n);
//   function standartSmall(arr: number[]) {
//     let smallestIndex = smallestElemIndex(arr);
//     arrToNumber(swapElem(arr, smallestElemIndex(arr), 0));
//     return [arrToNumber(arr), smallestIndex, 0];
//   }


//   //CURRENT
//   function smallestIncrease(arr, originalLength = arr.length) {
//     if (arr.length <= 1) {
//       return [0, 0, 0];
//     }

//     if (arr[0] === Math.min(...arr)) {
//       return 1 + smallestIncrease(arr.slice(1), originalLength);
//     } else {
//       return arr.indexOf(Math.min(...arr));
//     }
//   }

//   // [x] CC: 0 ВТОРОЙ
//   if (array[1] == 0) {
//     let tempElem = array[0];
//     array.splice(0, 1, tempElem);
//     array[1] = tempElem;
//     array.shift();
//     return [arrToNumber(array), 0, 1];
//   }
//   // [x] CC: минимальное число не первое, 0 не второй
//   else if (smallestElemIndex(array) != 0 && array[1] != 0) {
//     return standartSmall(array);
//   }
//   // [x] ЕСЛИ ПЕРВОЕ МИНИМАЛЬНОЕ
//   else if (smallestElemIndex(array) == 0) {
//     return [42];
//   }
//   // [x] ПЕРВОЕ НЕ МИНИМАЛЬНОЕ - СТАНДАРТНОЕ РЕШЕНИЕ
//   else if (smallestElemIndex(array) == 0) {
//     //CURRENT
//     return "xz";
//   } else {
//     return standartSmall(array);
//   }
// }
// // console.log(smallest(262235));
// // console.log(smallest(209917));
// // console.log(smallest(2853615));

// // console.log(smallest(95432));
// smallest(9504312);
// // console.log(smallest(115305));
export function smallest(n:number):number[] {
  let numStr = n.toString();
  let minNum = n;
  let fromIndex = 0;
  let toIndex = 0;

  for (let i = 0; i < numStr.length; i++) {
    let digit = numStr[i];
    let remaining = numStr.slice(0, i) + numStr.slice(i + 1);

    for (let j = 0; j <= remaining.length; j++) {
      let newNumStr = remaining.slice(0, j) + digit + remaining.slice(j);
      let newNum = parseInt(newNumStr, 10);

      if (newNum < minNum) {
        minNum = newNum;
        fromIndex = i;
        toIndex = j;
      }
    }
  }

  return [minNum, fromIndex, toIndex];
  }