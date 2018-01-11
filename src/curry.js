/**
 * @module 102/curry
 */

/**
 * @function module:102/curry
 * @param {function} f
 * @return {function}
 */
module.exports = curry;
 
function curry (arg){
    // Convert the arguments object to real array by slicing it
    var args = Array.prototype.slice.call(arguments, 1);

    return function(){
        return arg.apply(this, args.concat(
            Array.prototype.slice.call(arguments, 0)
        ))
    }
}


