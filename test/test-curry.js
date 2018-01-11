'use strict';
var expect = require('chai').expect
var curry = require('../src/curry.js')

describe('curry function test', () => {

    it('curry (f)(x) should return f(x)', () => {
        var arg = Math.random()
        var f = function(x) { return x}
        var expectedResult = f(arg)
        var curr = curry(f)
        var expected = curr(arg)
        expect(expected).to.equal(expectedResult)
    })
// Probleme here
    /*
    it('2 curry (f(x, y)) should return f(x)(y)', () => {
        var arg1 = Math.random()
        var arg2 = Math.random()
        var curryMultiplication = curry(function(x, y) { return x * y; })
       // var triple = curryMultiplication(arg1)
        var supposedResult = curryMultiplication(arg1)(arg2)
        var result = curryMultiplication(arg1, arg2)
        // var result = composed(arg1, arg2)
        expect(result).to.equal(supposedResult)
    })
    */
})