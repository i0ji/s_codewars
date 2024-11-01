function isLeap(year: number):any {
    return ((year % 4 === 0) && (year % 100 !=0)) || ((year % 100 == 0) && (year % 400 == 0))
}
 


  console.log(isLeap(2000))