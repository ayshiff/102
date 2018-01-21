/**
 * @module isInteger
 */

/**
 * @desc Returns true if the argument is an Integer.
 * @function isInteger
 * @param {any} val
 * @return {boolean}
 * 
 * @example
 * var val = 15;
 * isInteger(val) // true
 */
module.exports = isInteger;

function isInteger(val){
    return typeof val == 'number' && isFinite(val) && val % 1 === 0? true: false;
}

 


