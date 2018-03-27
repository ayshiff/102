'use strict';
var expect = require('chai').expect
var isFunction = require('../src/isFunction.js')

describe('isFunction function test', () => {

    it('isFunction(val) should return true', () => {
        var val = (x) => x + 2
        var supposedResult = true
        var result = isFunction(val)
        expect(result).to.equal(supposedResult);
    })

    it('isFunction(val) should return false', () => {
        var val = ""
        var supposedResult = false
        var result = isFunction(val)
        expect(result).to.equal(supposedResult);
    })
})