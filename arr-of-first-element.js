/** 
 * @param {object} n is to be raise
 * @function {object} get an array and assign the first index 
 * value of an array to the variable firstIndex
 * @return {object} it returns the first element in an array
 */

function arrOfFirst(n) {
    var firstIndex = n[0]; 
    return firstIndex;  
}

let result = arrOfFirst([ "Hello JS", 2.5, 3, 4, 5 ]);
console.log(" First element in the array = ", result);

