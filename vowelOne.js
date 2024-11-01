// Write a function that takes a string and outputs 
// a strings of 1's and 0's where vowels 
// become 1's and non-vowels become 0's.

// All non-vowels including non alpha characters 
// (spaces,commas etc.) should be included.

// Examples:

// vowelOne( "abceios" ) // "1001110"

// vowelOne( "aeiou, abc" ) // "1111100100"

function vowelOne(s) { 
  return s.replace(/[^AaEeUuIiOo]/g,0).replace(/[AaEeUuIiOo]/g,1)
}



console.log(vowelOne("O&EuAyOuGIR6nT7OuaQiUeiIob'+("))


// iI(/IiaIoY<yaj7AU O~Cad%kxei.z
// 110011111000100110100100001100
// 110011111101100110100100001100


// O4OAHaI<[*'EY8AP?p1i4UJ\X
// 1011011000010010000101000
// 1011011000011010000101000

// eyKAaOZ+AiMxa32I|yAT[EFeOo^ov
// 10011100110010010010010111010
// 11011100110010010110010111010
