/**
 * @module isInteger
 */

/**
 * @desc Returns a curried equivalent of the provided function.
 * @function isInteger
 * @param {any} val
 * @return {boolean}
 * 
 * @example
 * var val = 15;
 * isInteger(val)
 * s
 */
module.exports = isInteger;

function isInteger(val){
    return typeof val == 'number' && isFinite(val) && val % 1 === 0? true: false;
}

 


