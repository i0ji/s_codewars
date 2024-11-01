// //Create a function that takes an integer
// //as an argument and returns "Even" 
// //for even numbers or "Odd" for odd numbers.


// //#1

// function evenOrOdd(number) {
//   switch (number % 2) {
//     case 0: 
//       return 'Even'
//     case 1: 
//       return 'Odd'
//     case -1:
//       return 'Odd'
//   }
// }

// //#2
// function evenOrOdd(number) {
//   if (number % 2 === 0) {
//     return 'Even' 
//   } else {
//     return 'Odd'
//   }
// }

//#3

function evenOrOdd(number) {
  return (number % 2 == 0) ? 'Even' : 'Odd'
}



console.log(evenOrOdd(5))