/**
 * @module mapFunctor
 */

/**
 * @desc Returns a new Container
 * @function mapFunctor
 * @return {Container}
 * 
 */
var newContainer = require('./newContainer.js')

module.exports = mapFunctor = function (f){
    return newContainer(f(this._value))
}

