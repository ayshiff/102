# 102
[![Build Status](https://travis-ci.org/ayshiff/102.svg?branch=master)](https://travis-ci.org/ayshiff/102)
[![Coverage Status](https://coveralls.io/repos/github/ayshiff/102/badge.svg?branch=master)](https://coveralls.io/github/ayshiff/102?branch=master)

* * *

A modern functionnal programming library based on 101.
(This library is still in developpment.)

* * *







# apply





* * *

### apply.apply(fn, args) 

Apply a function to an argument list.

**Parameters**

**fn**: `function`

**args**: `array`

**Returns**: `any`

**Example**:
```js
let apply = require('102f/src/apply')
let arr = [0, 1, 2, 3]
apply(Math.max, arr) // 3
```



* * *











# compose





* * *

### compose.compose(f, g) 

Performs right-to-left function composition.

**Parameters**

**f**: `function`

**g**: `function`

**Returns**: `function`

**Example**:
```js
let compose = require('102f/src/compose')
var f = function(x){ return x * x}
var g = function(x){ return x + 2}
let composed = compose(f,g)
```



* * *











# curry





* * *

### curry.curry(f) 

Returns a curried equivalent of the provided function.

**Parameters**

**f**: `function`

**Returns**: `function`

**Example**:
```js
let multiply = require('102f/src/multiply')
var multiplyFunction = function(x,y) { return x * y }
var curried = curry(f)
curried(2)(3) //6
```



* * *











# isEmpty





* * *

### isEmpty.isEmpty(val) 

Returns true if the parameter is empty.

**Parameters**

**val**: `any`

**Returns**: `boolean`

**Example**:
```js
let isEmpty = require('102f/src/isEmpty')
var val = '';
isEmpty(val) // true
```



* * *











# isInteger





* * *

### isInteger.isInteger(val) 

Returns true if the argument is an Integer.

**Parameters**

**val**: `any`

**Returns**: `boolean`

**Example**:
```js
let isInteger = require('102f/src/isInteger')
var val = 15;
isInteger(val) // true
```



* * *











# isNumber





* * *

### isNumber.isNumber(val) 

Returns true if the argument is a Number.

**Parameters**

**val**: `any`

**Returns**: `boolean`

**Example**:
```js
let isNumber = require('102f/src/isNumber')
var val = 15.3;
isNumber(val)
```



* * *











# map





* * *

### map.map(f, array) 

**Parameters**

**f**: `function`

**array**: `Array`

**Returns**: `Array`

**Example**:
```js
let map = require('102f/src/map')
var array = [0,1,2,3]
var result = map(x => x * 2, array) //[0,2,4,6]
```



* * *











# mapFunctor





* * *

### mapFunctor.mapFunctor() 

Returns a new Functor.

**Returns**: `Container`



* * *











# multiply





* * *

### multiply.multiply(a, b) 

Returns the multiplication of two Numbers.

**Parameters**

**a**: `Number`

**b**: `Number`

**Returns**: `Number`

**Example**:
```js
let multiply = require('102f/src/multiply')
var a = 2
var b = 3
var result = multiply(a)(b) //6
```



* * *











# newContainer





* * *

### newContainer.newContainer(arg) 

Returns a new Container

**Parameters**

**arg**: `any`

**Returns**: `Container`

**Example**:
```js
var Container1 = newContainer(2) //Container { _value: 2 }
```



* * *










