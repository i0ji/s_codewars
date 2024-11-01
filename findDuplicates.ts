// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
//
//     Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice
function duplicateCount(text: string): number {

    // let arrStr = Array.from(text)
    // @ts-ignore
    let sortedArr = Array.from(text).map(el => el.toLowerCase()).sort()
    let counter = 0
    let wantedArr: string[] = []


    for (let i = 0; i < sortedArr.length; i++) {
        for (let j=i+1; j < sortedArr.length; j++) {
            if (sortedArr[i] === sortedArr[j]) {
                wantedArr.push(sortedArr[i])
            }
        }
    }

    return wantedArr.filter((item,pos)=>{
        return wantedArr.indexOf(item) == pos
    }).length

}





let test1 = `aaabbcccc`;

// let test2 = `Indivisibility`;

console.log(duplicateCount(test1));
// console.log(duplicateCount(test2));