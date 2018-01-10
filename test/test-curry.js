'use strict';
var expect = require('chai').expect
var curry = require('../curry.js')

describe('curry function test', () => {

    it('curry (f(x, y)) should return f(x)(y)', () => {
        var arg1 = Math.random()
        var arg2 = Math.random()
        var curryMultiplication = curry(function(x, y, z) { return x * y; }, arg1, 4)
        // var triple = curryMultiplication(arg1)
        var supposedResult = curryMultiplication(arg2)
        var result = curryMultiplication(arg1, 4, arg2)
        // var result = composed(arg1, arg2)
        expect(result).to.equal(supposedResult)
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