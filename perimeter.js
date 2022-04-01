/**
 * calculate perimeter of the rectangle
 * @param {number} length - length of the rectangle
 * @param {number} width - width of the rectangle
 * @returns {number} - returns perimeter of the rectangle
 */

function findPerimeter(length, width) {
    let perimeter = 2 * (length + width);
    return perimeter;
}

let length = 1;
let width = 2;
let result = findPerimeter(length, width);
console.log(" Perimeter of the Rectangle = ", result);


