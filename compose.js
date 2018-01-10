/**
 * @module 102/compose
 */

/**
 * [compose]
 * @function module:102/compose
 * @param {function} f
 * @param {function} g
 */
module.exports = compose;
 
function compose(f,g) {
  return function composed() { 
    var arguments = Array.prototype.slice.call(arguments);

    return f(g.apply(null, arguments));
  } 
}
