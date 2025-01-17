const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let obj = {};

  return names.map((x) => {
    if (obj[x]) {
      const newNames = `${x}(${obj[x]})`;
      obj[newNames] = 1;
      obj[x]++;
      return newNames;
    } else {
      obj[x] = 1;
      return x;
    }
  });
}

module.exports = {
  renameFiles
};
