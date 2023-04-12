const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
if (!arr || !Array.isArray(arr)) { 
  throw new Error( `'arr' parameter must be an instance of the Array!`)
}
let newArr = [...arr]
let arrTransform = [];
for (let i = 0; i < newArr.length; i++)
switch (newArr[i]) {
  case '--discard-next':
    newArr[i + 1] = false;
    i++
    break;
  case '--discard-prev':
    if (i != 0 && newArr[i - 1] ) {
      arrTransform.pop()
    }
      break;
 case '--double-next':
  if (i != newArr.length - 1) {
    arrTransform.push(newArr[i + 1])
  }
      break;
 case '--double-prev':
  if (i != 0 && newArr[i - 1]) {
    arrTransform.push(newArr[i - 1])  
  }
      break;
   default:
    if (newArr[i] || newArr[i] !== 'undefined') {
      arrTransform.push(newArr[i])    
    }
   
  }

return arrTransform
}

module.exports = {
  transform
};

