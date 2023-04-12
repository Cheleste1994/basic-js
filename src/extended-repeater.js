const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(string, options) {
  
let str = String(string)
const repeatTimes = Number.isInteger(options.repeatTimes) ? options.repeatTimes : 0;
const separator = options.separator || '+';
const addition = String(options.addition) || '';
const additionRepeatTimes = Number.isInteger(options.additionRepeatTimes) ? options.additionRepeatTimes : 0;
const additionSeparator = options.additionSeparator || '|';


let resultRepeat = (addition + additionSeparator).repeat(additionRepeatTimes).slice(0, -(additionSeparator.length)) || addition || '';
resultRepeat === 'undefined' ? resultRepeat = '' : resultRepeat;
let result = (str + resultRepeat + separator).repeat(repeatTimes).slice(0, -(separator.length)) || str + (resultRepeat || '')


return result
}

module.exports = {
  repeater
};

