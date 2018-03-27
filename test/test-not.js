'use strict';
var expect = require('chai').expect
var not = require('../src/not.js')

describe('not function test', () => {

    it('not(String) should return the opposite', () => {
        var val = 'Hello World ! '
        var supposedResult = !val
        var result = not(val)
        expect(result).to.equal(supposedResult);
    })

    it('not(Function) should return the opposite', () => {
        var f = function(x){ return typeof(x) === 'Number'}
        var g = 'Hello world !'
        let result= not(f(g))
        let supposedResult = true
        expect(result).to.equal(supposedResult);
    })
})