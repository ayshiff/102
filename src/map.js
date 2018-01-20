 /**
 * @module map
 */
 
 /**
  * @desc Performs right-to-left function composition. 
  */

/**
 * @function map
 * @param {function} f
 * @param {Array} array
 * @return {Array}
 */
module.exports = map;
const curry = require('./curry.js')


// This function is just applying map to a currying function
function map(f, array) {
  return curry(array.map(x => f(x)))
  } 

