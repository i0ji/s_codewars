/*All Star Code Challenge #18

Create a function that accepts 2 string arguments and returns an integer
of the count of occurrences the 2nd argument is found in the first one.
If no occurrences can be found, a count of 0 should be returned.

("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0*/

function strCount(str, letter) {
    count = 0
    for (i=0; i<str.length; i++) {
        if (str[i] == letter) {
        count++
        }
     }
     return count
  }
console.log(strCount('', 'z'))