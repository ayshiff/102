/**
 * @module 102/isInteger
 */

/**
 * @desc Returns a curried equivalent of the provided function.
 * @function module:102/isInteger
 * @param {any} val
 * @return {boolean}
 * 
 * @example
 * var val = 15;
 * isInteger(val)
 * 
 */
module.exports = isInteger;

function isInteger(val){
    return typeof val == 'number' && isFinite(val) && val % 1 === 0? true: false;
}

 


