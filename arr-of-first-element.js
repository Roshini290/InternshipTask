/** 
 * Returns the first element in an array
 * @param {object} arr - mixed array
 * @returns {object} - returns the first element of mixed array
 */

 function arrOfFirst(arr) {
    var firstIndex = arr[0]; 
    return firstIndex;  
}

let result = arrOfFirst([ "Hello Javascript", 2.5, 3, 4, 5 ]);
console.log(" First element in the array = ", result);
