/**
 * Problem 6
 * https://projecteuler.net/problem=6
 * 
 * The sum of the squares of the first ten natural numbers is: 385
 * The square of the sum of the first ten natural numbers is: 3025
 * Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is : 3025 - 385 = 2640
 * 
 * Find the difference between the sum of the squares of the first one hundred natural numbers and
 * the square of the sum.
 */

const log = require('./helper');

function sumSquareDifference(num) {
    let sum = 0;
    let sumOfSquares = 0;

    for(let i = 1; i <= num; i++) {
        sum = sum + i;
        sumOfSquares = sumOfSquares + (i ** 2);
    }

    return (sum ** 2) - sumOfSquares
}

log(sumSquareDifference(100));