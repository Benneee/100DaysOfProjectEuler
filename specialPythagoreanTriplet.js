/**
 * Problem 9
 * https://projecteuler.net/problem=9
 * 
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for which, 
 * a^2 + b^2 = c^2
 * For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
 * 
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 */


const log = require("./helper");

function specialPythagoreanTriplet(sum) {
    // for us to have a triplet
    // a^2 + b^2 = c^2

    // the sides of the triangle, b being the opposite and c being the hypotenuse
    let a, b, c = 0

    // Giving one of the lengths a head-start
    let i = 2

    let triplets = []; // Just to see the wonderful triplet
    let tripletProduct = 0; // the actual value we need

    let tripletFound = false;

    // This sum will be our defining factor against the sum passed in
    let sumOfTriplet = 0;

    while (tripletFound === false) {
        // We use the other length variable as the value in the loop
        for (let j = 1; j < i; j++) {
            // We use the relation between the sides to get a sum of the three sides
            a = (i ** 2) - (j ** 2);
            b = 2 * i * j;
            c = (i ** 2) + (j ** 2);

            sumOfTriplet = a + b + c

            if (sumOfTriplet === sum) {
                triplets.push({a, b, c});
                tripletProduct = a * b * c;
                tripletFound = true;
            }
        }
        sumOfTriplet = 0;
        i++;
    }
    
    return { 'product': tripletProduct, 'triplet': triplets};
}

log(specialPythagoreanTriplet(1000));