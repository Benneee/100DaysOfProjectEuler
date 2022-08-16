/**
 * Problem 5
 * https://projecteuler.net/problem=5
 * 
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any 
 * remainder.
 * 
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

const log = require("./helper");

/**
 * Need a limit number, 20 since we're going from 1 to 20
 * Need a target number that will keep increasing by 1 after every iteration
 * iteration should skip a number or break and go to the next if after an iteration,
 * the multiples array isn't 20
 * the iteration should stop when the multiples array has a length of 20
 * then we save the final number and that's our return value
 */

function smallestMultiple(upperRange) {
    let multiples = [];
    let limit = upperRange;
    let targetNumber = 1;
    let multipleFound = false;
    
    // Continue the loop
    while (multipleFound === false) {
        // loop within limit
        // Check if the number's remainder is 0 and then push to multiples array
        for (let i = 1; i <= limit; i++) {
            if (targetNumber % i === 0) {
                multiples.push(i);
            }
        }
        // After the iteration using the limit as base,
        // We check the length of the array, if it's less than our limit,
        // we continue iterating as multipleFound still equals false
        // if otherwise, we set multipleFound to true and
        // return the value of targetNumber at that point

        if (multiples.length === limit) {
            multipleFound = true
        } else {
            targetNumber++
            multiples = [];
        }
    };
    return targetNumber;
}

log(smallestMultiple(20));