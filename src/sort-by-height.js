const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
// function sortByHeight(arr) {

// return arr.sort((a, b) => a == (-1) ? 0 : a < b ? -1 : 1)
// }


function sortByHeight(arr) {
  let newArr = arr.filter(x => x !== -1).sort((a, b) => a - b);
  console.log(newArr)
  return arr.map( (x) => x !== -1 ? newArr.shift() : x );
}


module.exports = {
  sortByHeight
};

