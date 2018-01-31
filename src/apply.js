/**
 * @module apply
 */

/**
 * @desc Apply a function to an argument list.
 * @function apply
 * @return {any}
 * @param {function} fn
 * @param {array} args
 * @example
 * let apply = require('102f/src/apply')
 * let arr = [0, 1, 2, 3]
 * apply(Math.max, arr) // 3
 */
 
const curry = require('./curry.js')

module.exports = apply = curry(function apply (fn, args){
    return fn.apply(this, args)
})


 


