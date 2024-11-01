function reverseElem(el: string): string {
    return el.split("").reverse().join("");
}

export function reverseWords(str: string): string {
    return str.split(' ').map(elem => reverseElem(elem)).join(' ')
}


console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));