/**
 * @param {number} length is to be raise and must be a natural number.
 * @param {number} width is to be raise and must be a natural number.
 * @return {number} it returns the perimeter value 
   of given length and width.
 */

function findPerimeter(length, width) {
    let perimeter = 2 * (length + width);
    return perimeter;
}

let length = 2;
let width = 3;
let result = findPerimeter(length, width);
console.log(" Perimeter of the Rectangle = ", result);


