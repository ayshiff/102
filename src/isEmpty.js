/**
 * @module isEmpty
 */

/**
 * @desc Returns true if the parameter is empty.
 * @function isEmpty
 * @param {any} val
 * @return {boolean}
 * 
 * @example
 * var val = '';
 * isEmpty(val) // true
 * 
 */
module.exports = isEmpty;

function isEmpty(val){
    return (val === '' || val === null || val === undefined )
}

 