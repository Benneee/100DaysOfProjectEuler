/**
 * Problem 10
 * https://projecteuler.net/problem=10
 *
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 * Find the sum of all the primes below two million.
 */

const log = require("./helper");

/**
 * Our limit will be two million
 * we can use an helper function to find all the prime numbers off a while loop
 * with limit set as the limit from the function's argument
 *
 * This needs to be redone :) 02/01/2026
 */
function summationOfPrimes(limit) {
    let arrayOfPrimeNumbers = [];

    let starter = 2;
    let limitReached = false;

    while (limitReached === false) {
        arrayOfPrimeNumbers.push(findPrime(starter));
        arrayOfPrimeNumbers = [...new Set(arrayOfPrimeNumbers)];

        if (starter === limit) {
            limitReached = true;
        } else {
            starter++;
        }
    }

    return arrayOfPrimeNumbers.reduce(
        (previous, current) => previous + current,
        0,
    );
}

function findPrime(num) {
    for (let i = 2; i <= num; i++) {
        if (num % i === 0) {
            num = num / i;
            return i;
        }
    }
}

log(summationOfPrimes(100000));
