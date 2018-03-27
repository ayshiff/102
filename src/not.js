/**
 * @module not
 */


/**
 * @desc Performs right-to-left function composition.
 * @function not
 * @param {any} val
 * 
 * @return {!val}
 * 
 * @example 
 * var f = function(x){ return typeof(x) === 'Number'}
 * var g = 'Hello world !'
 * let testNot= not(f(g) // true
 */

 let isFunction = require('./isFunction')
 let isNumber = require('./isNumber')

 module.exports = not;

 function not(val) {
     if(isFunction(val)){
        return function(/* arguments */) {
            return not(val.apply(this, arguments))
        }
     } else {
         return !val
     }
 }