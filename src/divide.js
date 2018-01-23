/**
 * @module divide
 */

/**
 * @desc Returns the multiplication of two Numbers.
 * @function divide
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 * 
 * @example
 * var a = 6
 * var b = 2
 * var result = divide(a)(b) //3
 */
var curry = require('./curry.js')

module.exports = divide = curry(function divide(a, b) { return a / b; });