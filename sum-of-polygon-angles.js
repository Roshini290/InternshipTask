/**
 * calculate the sum of internal angles in a polygon 
 * @param {number} sides - number of sides in a polygon
 * @returns {number} - returns sum of internal angles in a polygon
 */

function sumOfInternalAngles(sides) {

    if (sides < 3) {
        return 0;
    }

    return ( (sides - 2) * 180 );
}

let sides = 4;
let degree = sumOfInternalAngles(sides);
console.log(" Sum of Internal angles in a Polygon = ", degree + " degree ");


