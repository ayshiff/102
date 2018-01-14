/**
 * @module 102/multiply
 */

/**
 * @desc Returns a new Container
 * @function module:102/multiply
 * @param {Function} f
 * @return {Container}
 * 
 */
var curry = require('./curry.js')

module.exports = multiply

var multiply = curry(function multiply(a, b) { return a * b; });

console.log(multiply(4,5))