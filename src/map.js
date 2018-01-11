/**
 * @module 102/map
 */

/**
 * [compose]
 * @function module:102/map
 * @param {function} f
 * @param {function} g
 */
module.exports = map;
const curry = require('./curry.js')

 
// This function is just applying map to a currying function
function map(f, arg) {
  return curry(arg.map(x => f(x)))
  } 
