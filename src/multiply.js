/**
 * @module multiply
 */

/**
 * @desc Returns the multiplication of two Numbers.
 * @function multiply
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 * 
 * @example
 * var a = 2
 * var b = 3
 * var result = multiply(a)(b) //6
 */
var curry = require('./curry.js')

module.exports = multiply = curry(function multiply(a, b) { return a * b; });
