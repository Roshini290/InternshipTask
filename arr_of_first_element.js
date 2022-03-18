/** 
 * @param {object} it must be in square brackets
 * @param {object} n is to be raise
 * @function {object} it assign the first element of an array
   in variable First
 * @return {object} it returns the first element in an array
 */

function arr_of_First(n) {
    var First = n[0]; 
    return First;  
}

let Result = arr_of_First([ "Hello JS", 2.5, 3, 4, 5 ]);
console.log(" First element in the array = ", Result);