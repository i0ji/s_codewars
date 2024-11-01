// let x = 10
// let y = x.toString()
//          .split(/[1-9]/gm)
//          .splice(1)
// console.log(y)

// // let x = 10002030000
// // let y = x.toString()
// //          .split(/[1-9]/gm)
// // let max = y[0]
// //          for (i = 0; i < y.length; i++)
// //           if (y[i] > max) {
// //           max = y[i].length+1 }
// //           console.log(max) 
// // // console.log(y)

f=inp=> {
let y = inp.toString().split(/[1-9]/gm).splice(1)
let max = y[0]
for(i=0;i<y.length;i++)
if(y[i] >= max)
max=y[i]
return(max.length)
}
console.log(f(1002000))