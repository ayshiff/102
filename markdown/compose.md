# compose





* * *

### compose.compose(f, g) 

Performs right-to-left function composition.

**Parameters**

**f**: `function`, Performs right-to-left function composition.

**g**: `function`, Performs right-to-left function composition.

**Returns**: `function`

**Example**:
```js
var f = function(x){ return x * x}
var g = function(x){ return x + 2}
let composed = compose(f,g)
```



* * *










