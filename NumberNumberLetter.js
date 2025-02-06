function doMath(string) {
  let newStr = string.split(' ');
  let newObj;
  let newArr = [];
  let sortedArr = [];
  let sum = 0;

  for (let i = 0; i < newStr.length; i++) {
    newObj = {
      id: i,
      letter: newStr[i].match(/\D/g).join(''),
      plot: newStr[i].match(/\d/g).join(''),
    };

    // console.log(newObj)
    newArr.push(newObj);
  }

  newArr.sort((a, b) => a.letter.localeCompare(b.letter));

  for (let k = 0; k < newArr.length; k++) {
    sortedArr.push(newArr[k].plot);
  }

  for (let j = 0; j < sortedArr.length; j++) {
    console.log(sortedArr[j]);
    console.log(sortedArr[j + 1]);
    console.log(sortedArr[j + 2]);
    // sum = ((sortedArr[j] + sortedArr[j + 1] - sortedArr[j + 3]) * sortedArr[j + 4]) / sortedArr[j + 5]
    // console.log(sum)
  }

  return sortedArr;
}

// console.log(doMath("24z6 1x23 y369 89a 900b"))
console.log(doMath('24z6 1x23 y369 89a 900b'));
