/**
 * @module 102/apply
 */

/**
 * @desc Apply a function to an argument list.
 * @function module:102/apply
 * @param {array} val
 * @return {boolean}
 * 
 * @example
 * let arr = [0, 1, 2, 3]
 * apply(Math.max, arr) // 3
 */
 
const curry = require('./curry.js')

module.exports = apply = curry(function apply (fn, args){
    return fn.apply(this, args)
})


 


