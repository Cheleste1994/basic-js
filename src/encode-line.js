const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let obj = Array.from(new Set (str))
  let strArr = str.split('')
  let i = 1;
  let result = '';


  for (let index = 0; index < str.length; index++) {
    if (str[index] === str[index + 1]) {
      i++;
    } else {
      result += i > 1 ? i + str[index] : str[index];
      i = 1;
    }
  }

  return result;
}

module.exports = {
  encodeLine
};


