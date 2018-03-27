/**
 * @module isFunction
 */

 /**
  * @desc Returns true if the argument is a Function
  * @function isFunction
  * @param {function} val
  * @return {boolean}
  * 
  * @example
  * let val = (x) => x + 2
  * isFunction(val) // true
  */

  module.exports = isFunction;

  function isFunction(val) {
      return typeof(val) === 'function'
  }
