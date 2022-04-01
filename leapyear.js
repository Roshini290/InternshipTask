/**
 * Check Leap year or not
 * @param {number} year - year
 * @returns {boolean} - returns true if it is leap year 
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




