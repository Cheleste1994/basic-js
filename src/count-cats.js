const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(...arguments) {
    let i = 0
    arguments.map((x) => {x.map((x1) => 
      {x1.map((x2) => {x2 === '^^' ? i++: i})})})
    return i
}
module.exports = {
  countCats
};

