const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  const arr = [];
  if (!members || !members[0]) {return false}
  members.map((x) => {typeof(x) === 'string'? arr.push((x.trim().toUpperCase())[0]) : false})
 return arr.sort().join('')
}

module.exports = {
  createDreamTeam
};

