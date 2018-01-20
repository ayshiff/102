/**
 * @module mapFunctor
 */

/**
 * @desc Returns a new Functor
 * @function mapFunctor
 * @return {Container}
 * 
 */
var newContainer = require('./newContainer.js')

module.exports = mapFunctor = function (f){
    return newContainer(f(this._value))
}

