/**
 * @module 102/isEmpty
 */

/**
 * @desc Returns true if the parameter is empty.
 * @function module:102/isEmpty
 * @param {any} val
 * @return {boolean}
 * 
 * @example
 * var val = '';
 * isEmpty(val)
 * 
 */
module.exports = isEmpty;

function isEmpty(val){
    return (val === '' || val === null || val === undefined )
}

 