/**
 * Problem 7
 * https://projecteuler.net/problem=7
 * 
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is
 * 13.
 * 
 * What is the 10 001st prime number?
 */

const log = require("./helper");

// First question should be how to determine a prime number
// Ordinarily, a prime number is a number that is divisible by only itself and 1
// So to find the 10 001st prime number, we just need the prime number whose position
// in an array of prime numbers is 10001.

// Either we use an array or we just keep iterating and keep count of the position somewhere,
// if the position happens to be 10001, that position value is our result
function tenThousandAndFirstPrimeNumber(position) {
    let targetNumber = 2;
    let primeNumberFound = false;
    let arrayOfPrimeNumbers = [];

    while (primeNumberFound === false) {
        arrayOfPrimeNumbers.push(findPrime(targetNumber));
        // to remove duplicates
        arrayOfPrimeNumbers = [ ...new Set(arrayOfPrimeNumbers) ]

        if (arrayOfPrimeNumbers.length === position) {
            primeNumberFound = true;
        } else {
            targetNumber++;
        }        
    }
    return arrayOfPrimeNumbers[position - 1];
}

function findPrime(num) {
    for (let i = 2; i <= num; i++) {
        if (num % i === 0) {
            num = num / i;
            return i;
        }
    }
}

log(tenThousandAndFirstPrimeNumber(10001))