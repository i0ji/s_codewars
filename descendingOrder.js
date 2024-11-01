// Your task is to make a function that can take
// any non-negative integer as an argument and
// return it with its digits in descending order. 
// Essentially, rearrange the digits to create the
// highest possible number.

function descendingOrder(n) { 
  //   if (n = 0) {
  //     return 0
  //   } else {
      let z = n
            .toString()
            .split('')
            .sort((a, b) => a-b)
            .reverse()
            .join('')
      return Number(z)
  //     }
  }
  
console.log(typeof descendingOrder(0))
console.log(descendingOrder(1))
console.log(descendingOrder(111))
console.log(descendingOrder(15))
console.log(descendingOrder(1021))
console.log(descendingOrder(12345678))