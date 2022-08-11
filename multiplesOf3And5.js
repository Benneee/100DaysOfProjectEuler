/**
 * Problem 1
 * https://projecteuler.net/problem=1
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these    multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

const log = console.log;

// First question: how to know if a number is a multiple of another in JavaScript

// A multiple of a number A is a number divisible by 1 and the number A, so modulo (%) without remainder
// After we get the numbers that modulo works out for, we save these numbers somewhere, e.g an array
// Next we call "array.reduce" on said array to give us the sum

function multiplesOfThreeAndFive(num) {
    if (num > 0) {
        let multiples = [];
        for (let value = 0; value < num; value++) {
            if (value % 3 === 0 || value % 5 === 0) {
                multiples.push(value)
            }
        }
        return multiples.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    }
    return 0;
}

log(multiplesOfThreeAndFive(1000)); // 233168