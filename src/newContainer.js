/**
 * @module 102/newContainer
 */

/**
 * @desc Returns a new Container
 * @function module:102/newContainer
 * @param {any} arg
 * @return {Container}
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

