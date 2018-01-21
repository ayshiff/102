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
 * 
 * @example
 * var array = [0,1,2,3]
 * var result = map(x => x * 2, array) //[0,2,4,6]
 */
module.exports = map;
const curry = require('./curry.js')


// This function is just applying map to a currying function
function map(f, array) {
  return curry(array.map(x => f(x)))
  } 

