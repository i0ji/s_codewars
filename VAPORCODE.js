// Write a function that converts any sentence into a V A P O R W A V E
// sentence. a V A P O R W A V E sentence converts all the letters
// into uppercase, and adds 2 spaces between each
// letter (or special character) to create
// this V A P O R W A V E effect.

// function vaporcode(string) {
// 	let z = string.toString().split(/\s?/)
// 	 for (let x of z)
//     return z.map(el => el.toUpperCase())
// 	   }

// console.log(vaporcode(`Lets go to the movies`))

// // let x = "Lets go to the movies"
// function vaporcode(string) {
//   let z = string.toString().split(/\s?/)
//   for (let elem of z)
//    return z.map(el => el.toUpperCase().join(''))
// }

function vaporcode(string) {


  let z = string.toString().split(/\s?/)

   for (let x of z)
 
     return z.map(el => el.toUpperCase()).join('  ').trim()

     }

