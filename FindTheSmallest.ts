function smallest(n: number): any {
  //USEFULL NUMBER => ARR
  function numberToArr(number: number) {
    return Array.from(String(number), Number);
  }

  //USEFULL ARR => NUMBER
  function arrToNumber(arr: number[]) {
    return Number(arr.join(""));
  }
  //USEFULL МИНМАЛЬНОЕ ЧИСЛО В ИСХОДНОМ МАССИВЕ
  function smallestElem(number: number) {
    return Math.min(...numberToArr(number));
  }

  //USEFULL ИНДЕКС МИНИМАЛЬНОГО ЧИСЛА В МАССИВЕ
  function smallestElemIndex(arr: number[]) {
    return arr.findIndex((num: number) => num == smallestElem(n));
  }
  //VALUE МАССИВ ИЗ ИСХОДНОГО ЧСИЛА
  let array = numberToArr(n);

  function standartSmall(number: number) {
    let tempArr = numberToArr(number);
    let tempSlamllest = smallestElem(number);
    tempArr.splice(smallestElemIndex(tempArr), 1);
    let tempNumber = arrToNumber(tempArr);
    return [tempNumber, smallestElemIndex(array), 0];
  }

  function smallestElemIndexLeft(array: number[]) {
    let index = 0;
    while (index < array.length) {
      if (array[index] > smallestElem(n)) {
        console.log(index)
        index++
  
      } 
      index++
    } 
  }

  return smallestElemIndexLeft(array);

  // [x] CC: 0 ВТОРОЙ
  // if (array[1] == 0) {
  //   let tempElem = array[0];
  //   array.splice(0, 1, tempElem);
  //   array[1] = tempElem;
  //   array.shift();
  //   return [arrToNumber(array), 0, 1];
  // } // [x] CC: минимальное число не первое, 0 не второй
  // else if (smallestElemIndex(array) != 0 && array[1] != 0) {
  //   return standartSmall(n);
  // } // [x] ЕСЛИ ПЕРВОЕ ЧИСЛО МИНИМАЛЬНОЕ, ТО ИЩЕМ ИНДЕКС СЛЕДУЮЩЕГО МИНИМАЛЬНОГО
  // else {
  //   let index = 0;
  //   while (index < array.length) {
  //     let tempArr = array.shift();
  //     if (smallestElemIndex(array) == 0) {
  //     }

  //     index++;
  //   }
  //   return [];
  // } else
  // if (smallestElemIndex(array) == 0) {
  //   return standartSmall(n);
  // }
}

console.log(smallest(296837));
console.log(smallest());
// console.log(smallest(209917));
// console.log(smallest(109917));
// console.log(smallest(409917));
// console.log(smallest(2853615));
// console.log(smallest(115305));
