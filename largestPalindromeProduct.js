/**
 * Problem 4
 * https://projecteuler.net/problem=4
 * 
 * A palindromic number reads the same both ways. The largest palindrome made from the product 
 * of two 2-digit numbers is 9009 = 91 × 99.
 * 
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

const log = require("./helper");

/**
 * We need to find a way to get all the possible 3 digits
 * Do a product between each one of them
 * Compare result of one product to its mirror image
 * If we get a match, we push the product to an array
 * At the end of the computation, we can find the max item in the array 
 * and the max item will be our answer
 */

function largestPalindromeProduct() {
    // 3 digits numbers are 100 to 999
    let lowest = 100;
    let highest = 999;
    let results = []

    for (let i = lowest; i <= highest; i++) {
        for (let j = highest; j >= lowest; j--) {
            let product = i * j

            let stringifiedProduct = String(product);
            let reversedStringifiedProduct = stringifiedProduct.split('').reverse().join('');

            if (stringifiedProduct === reversedStringifiedProduct) {
                results.push(Number(stringifiedProduct));
            }
        };
    };

    return Math.max(...results);
}

console.log(largestPalindromeProduct())