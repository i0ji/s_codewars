function tailSwap(arr: [string, string]): [string, string] {
    let newArr
    let resultArr


    newArr = arr.map(elem => elem.split(':'));

    const temp = newArr[0][1];
    newArr[0][1] = newArr[1][1];
    newArr[1][1] = temp;

    resultArr = newArr.map(elem => elem.join(':')).flat();

    return resultArr as [string, string]
}

console.log(tailSwap(['abc:123', 'def:456']))


//
// function tailSwap(arr: [string,string]): [string,string] {
//     const one: string[] = arr[0].split(':');
//     const two: string[] = arr[1].split(':');
//
//     return [`${one[0]}:${two[1]}`, `${two[0]}:${one[1]}`];
// }