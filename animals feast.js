// All of the animals are having a feast!
// Each animal is bringing one dish. There is just one rule:
// the dish must start and end with the same letters as the animal's name.
// For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
// Write a function feast that takes the animal's name and dish as arguments and returns true or false
//  to indicate whether the beast is allowed to bring the dish to the feast.
// Assume that beast and dish are always lowercase strings, and that each has at least two letters.
// beast and dish may contain hyphens and spaces,
// but these will not appear at the beginning or end of the string. They will not contain numerals.

// #1
function feast(beast, dish) {

  // let b = Array.from(beast)
  // let d = Array.from(dish)
  return (beast[0] === dish[0] && beast[beast.length-1] === dish[dish.length-1])
}
console.log(feast('cat', 'carrot'))

// #2
function feast(beast, dish) {
  return (beast[0] === dish[0] && beast.at(-1) === dish.at(-1))
  }
console.log(feast(`cat`,`carrot`,'car'))

// function feast(beast, dish) {

//   let b = Array.from(beast)
//   let d = Array.from(dish)
//   return (b[0] === d[0] && b[b.length-1] === d[d.length-1])
// }
// console.log(feast('cat', 'carrot'))