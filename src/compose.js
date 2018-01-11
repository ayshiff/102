
/**
 * [compose]
 * @function module:102/compose
 * @param {function} f
 * @param {function} g
 */

 /**
 * this is compose
 */
 
module.exports = function compose(f,g) {
  return function composed() { 
    var argument = Array.prototype.slice.call(arguments);

    return f(g.apply(null, argument));
  } 
}