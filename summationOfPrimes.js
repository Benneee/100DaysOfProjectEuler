/**
 * Problem 10
 * https://projecteuler.net/problem=10
 *
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 * Find the sum of all the primes below two million.
 */

const log = require("./helper");

/**
 * Reviewed the previous solution
 *
 * We will have a helper function to tell us if a number is prime
 *
 * Use the helper function in the main function to weed out the prime numnbers
 * while keeping a rolling sum
 * at the end, the sum is returned as the value
 *
 * The helper function takes away the complexity of finding the prime numbers first
 */
function summationOfPrimes(limit) {
  let starter = 2;
  let sum = 0;

  for (let i = starter; i < limit; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }

  return sum;
}

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

log(summationOfPrimes(2000000));
