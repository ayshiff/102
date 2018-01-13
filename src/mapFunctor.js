/**
 * @module 102/mapFunctor
 */

/**
 * @desc Returns a new Container
 * @function module:102/mapFunctor
 * @param {Function} f
 * @return {Container}
 * 
 */
var newContainer = require('./newContainer.js')

module.exports = Container.prototype.mapFunctor = function (f){
    return newContainer(f(this._value))
}

