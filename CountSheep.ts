export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
    let count: number = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true) {
            count++
        }
    }
    return count
}

let array1 = [true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true];

console.log(countSheeps(array1))


// export function countSheeps(arrayOfSheep) {
//   return arrayOfSheep.filter(Boolean).length;
// }