/**
 * @param {number} number of sides is to be raise and 
   must be a natural number.
 * @return {number} it returns sum of internal angles
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


