/**
 * @module 102/compose
 */

 /**
 * @example 
 * var f = function(x){ return x * x}
 * var g = function(x){ return x + 2}
 * let composed = compose(f,g)
 * 
 */

/**
 * @function module:102/compose
 * @param {function} f
 * @type {function}
 * @param {function} g
 * 
 * @return {function}
 */

module.exports = function compose(f,g) {
  return function composed() { 
    var argument = Array.prototype.slice.call(arguments);

    return f(g.apply(null, argument));
  } 
}
