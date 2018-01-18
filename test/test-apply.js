'use strict';
var expect = require('chai').expect
var apply = require('../src/apply.js')

describe('apply function test', () => {

    it('apply(Math.max, arr) should return the higher element', () => {
        var arr = [0,1,2,3,4,5,6,7]
        var supposedResult = 7
        var result = apply(Math.max, arr)
        expect(result).to.equal(supposedResult);
    })
})