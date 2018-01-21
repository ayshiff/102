/**
 * @module isNumber
 */

/**
 * @desc Returns true if the argument is a Number.
 * @function isNumber
 * @param {any} val
 * @return {boolean}
 * 
 * @example
 * var val = 15.3;
 * isNumber(val)
 * 
 */
module.exports = isNumber;

function isNumber(val){
    return typeof(val) === 'number' && isFinite(val)? true: false;
}

 


