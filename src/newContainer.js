/**
 * @module newContainer
 */

/**
 * @desc Returns a new Container
 * @function newContainer
 * @param {any} arg
 * @return {Container}
 * 
 * @example
 * var Container1 = newContainer(2) //Container { _value: 2 }
 * 
 */
module.exports = newContainer;

function newContainer(arg){
   var Container =  function (x){
        this._value = x
    }
    return new Container(arg)
}
var result = newContainer(undefined)
console.log(result)

