/**
 * @module 102/curry
 */

/**
 * @desc Returns a curried equivalent of the provided function.
 * @function curry
 * @param {function} f
 * 
 * @return {function}
 * 
 * @example
 * var multiplyFunction = function(x,y) { return x * y }
 * var curried = curry(f)
 * curried(2)(3)
 */

module.exports = curry;
 /*
function curry (arg){
    // Convert the arguments object to real array by slicing it
    var args = Array.prototype.slice.call(arguments, 1);

    return function(){
        return arg.apply(this, args.concat(
            Array.prototype.slice.call(arguments, 0)
        ))
    }
}
*/
var sliceFunction = Array.prototype.slice;

function curry(f, n) {
    var length = n || f.length;
    return _curry(f, length, []);
  }
  
  function _curry(f, n, args) {
  
    return function() {
      var curryArgs = args.concat(sliceFunction.call(arguments));
  
      if (curryArgs.length >= n) {
        return f.apply(null, curryArgs.slice(0, n));
      } else {
        return _curry(f, n, curryArgs);
      }
    };
  }


