/** 
 * @param {object} arr - mixed array
 * @return {object} firstIndex - returns the first element of mixed array
 */

 function arrOfFirst(arr) {
    var firstIndex = arr[0]; 
    return firstIndex;  
}

let result = arrOfFirst([ "Hello Javascript", 2.5, 3, 4, 5 ]);
console.log(" First element in the array = ", result);

