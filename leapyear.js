/**
 * @param {number} year - year
 * @return {boolean} returns true if the given year is leap year
   otherwise it returns false 
 */

function checkLeapyear(year) { 

   if( (year % 400 == 0) || (year % 100 != 0) && (year % 4 == 0) ) {
       return true;
   } else {
       return false;
   }
}

let year = 2020;
console.log(checkLeapyear(year));

