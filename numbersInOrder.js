function inAscOrder(arr) {
  return (
    JSON.stringify(arr) ===
    JSON.stringify(arr.sort((a, b) => a - b))
  );
}
console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20]));
console.log(inAscOrder([1, 4, 10, 28, 2, 4, 20]));

// function inAscOrder(arr) {
//     for (i=0; i<arr.length; i++) {
//         if (arr[i]<arr[i+1]) {
//         return true
//     }  else {
//         return false
//     }
// }}
// console.log(inAscOrder([1,6,10,18,2,4,20]))

// let x = [1,6,10,18,2,4,20]
// let y = x.sort((a, b) => a-b)
// console.log(x===y)
// console.log(y.toString())
// console.log(x.toString())
// console.log(x.sort((a, b) => a-b).toString())
// console.log(x.sort((a, b) => a-b).toString()===x.toString)

// let arr = [1, 6, 10, 18, 2, 4, 20]
// console.log(JSON.stringify(arr))
// console.log(JSON.stringify(arr.sort((a,b) => a - b)))
// console.log(JSON.stringify(arr))
