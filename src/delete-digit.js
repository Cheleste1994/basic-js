const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
let number = [...arguments].join('').split('')
let sum = 0;
for (let i = 0; i < number.length; i++) {
  const newNumber = Number(number.filter((_, i1) => i1 !== i).join(''));
  if (newNumber > sum) {
    sum = newNumber; 
  }
}

  return sum
}

module.exports = {
  deleteDigit
};

