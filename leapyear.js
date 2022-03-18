/* program to check leap year or not
    three conditions to find out the leap year
    Return true if year is a multiple
    of 4 and not multiple of 100.
    OR year is multiple of 400. */

function checkLeapYear(year) {
   if((year % 400 == 0) || (year % 100 != 0) && (year % 4 == 0)) {
     return true;
   } else {
     return false;
   }
}

let year = 2020;
console.log( checkLeapYear(year));

