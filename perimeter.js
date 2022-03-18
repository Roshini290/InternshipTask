/**
 * @param {number} length is to be raise and must be a natural number.
 * @param {number} width is to be raise and must be a natural number.
 * @return {number} it returns the perimeter value 
   of given length and width.
 */

function find_Perimeter(length, width) {
    let perimeter = 2 * (length + width);
    return perimeter;
}

let length = 2;
let width = 3;
let Result = find_Perimeter(length, width);
console.log(" Perimeter of the Rectangle = ", Result);


