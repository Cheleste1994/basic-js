const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

const dateSample = (...arguments) => {
  
  if (typeof(arguments[0]) != 'string' || isNaN(arguments[0]) || arguments[0] <= 0 || arguments[0] > MODERN_ACTIVITY) {
    return false;
  }
  
  let period = Math.log(2).toFixed(10) / HALF_LIFE_PERIOD;
  
  let year = Math.ceil(Math.log(MODERN_ACTIVITY / arguments[0]) / period);
  
  return year;

}

module.exports = {
  dateSample
};
dateSample('WOOT!') 