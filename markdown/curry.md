# curry





* * *

### curry.curry(f) 

Returns a curried equivalent of the provided function.

**Parameters**

**f**: `function`, Returns a curried equivalent of the provided function.

**Returns**: `function`

**Example**:
```js
var multiplyFunction = function(x,y) { return x * y }
var curried = curry(f)
curried(2)(3) //6
```



* * *










