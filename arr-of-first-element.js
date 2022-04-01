/** 
 * @param {object} a - array
 * @return {object} firstIndex - returns the first element of an array
 */

 function arrOfFirst(a) {
    var firstIndex = a[0]; 
    return firstIndex;  
}

let result = arrOfFirst([ "Hello Javascript", 2.5, 3, 4, 5 ]);
console.log(" First element in the array = ", result);

