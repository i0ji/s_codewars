//Count the number of divisors of a positive integer n.
//
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

function getDivisorsCnt(n){
    let count = 0
    for (i=0; i<=n; i++) {
        if (n % i === 0) {
            count++
        }
    }
    return count
}
console.log(getDivisorsCnt(4))
console.log(getDivisorsCnt(12))


// let x = 4
// let count = 0
// for (i=0; i<=x; i++) {
//         if (x % i === 0) {
//             count++ }
        
// }
// console.log(count)