const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
let str = [...arguments].join('').split('')
let sum = 0
let res = str.reduce((acc, i) => {
  if (acc.hasOwnProperty(i)) {
    acc[i] += 1;
  } else {
    acc[i] = 1;
  }

  return acc;
},{})

let arr = Object.values(res)
arr.map((x)=> {
sum = Math.floor(x / 2) + sum
})

let sum2 = s1.length <= sum ? s1.length : sum

return sum2
}

module.exports = {
  getCommonCharacterCount
};

