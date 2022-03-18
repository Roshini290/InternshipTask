/**
 * @param {number} number of sides is to be raise and 
   must be a natural number.
 * @function {number} a plane figure having a minimum of three sides 
 * @return {number} it returns sum of internal angles
 */

function sum_Of_InternalAngles(sides) {

    if (sides < 3) {
        return 0;
    }

    return ( (sides - 2) * 180 );
}

let sides = 4;
let degree = sum_Of_InternalAngles(sides);
console.log(" Sum of Internal angles in a Polygon = ", degree + " degree ");
