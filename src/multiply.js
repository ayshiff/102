/**
 * @module multiply
 */

/**
 * @desc Returns a new Container
 * @function multiply
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 * 
 */
var curry = require('./curry.js')

module.exports = multiply = curry(function multiply(a, b) { return a * b; });
