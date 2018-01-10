/**
 * @module 102/compose
 */

/**
 * [compose description]
 * @function module:101/compose
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