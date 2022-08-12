/**
 * Problem 3
 * https://projecteuler.net/problem=3
 * 
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 */

const log = require("./helper");

// What is a prime factor
// A prime factor of a number is one that provides a remainder of 0 when it is used to divide the number, so, any number that modulo's another number B to give 0 is a prime factor of number B


function largestPrimeFactor(num) {
    let primeNumbers = [];

    for (let i = 2; i <= num; i++) {
        if (num % i === 0) {
        // causes a continuous division as needed in the practical sense of deriving a prime factor
            num = num / i
            primeNumbers.push(i)
        }
    }
    return Math.max(...primeNumbers); // 6857
}

log(largestPrimeFactor(600851475143))