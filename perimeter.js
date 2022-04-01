/**
 * @param {number} length - vertical length
 * @param {number} width - horizontal width
 * @return {number} - returns the perimeter 
   of given length and width
 */

function findPerimeter(length, width) {
    let perimeter = 2 * (length + width);
    return perimeter;
}

let length = 1;
let width = 2;
let result = findPerimeter(length, width);
console.log(" Perimeter of the Rectangle = ", result);


