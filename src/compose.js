/**
 * @module compose
 */


/**
 * @desc Performs right-to-left function composition.
 * @function compose
 * @param {function} f
 * @param {function} g
 * 
 * @return {function}
 * 
 * @example 
 * var f = function(x){ return x * x}
 * var g = function(x){ return x + 2}
 * let composed = compose(f,g)
 */

module.exports = function compose(f,g) {
  return function composed() { 
    var argument = Array.prototype.slice.call(arguments);

    return f(g.apply(null, argument));
  } 
}
