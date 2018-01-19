/**
 * @module newContainer
 */

/**
 * @desc Returns a new Container
 * @function newContainer
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

