'use strict';
var expect = require('chai').expect
var multiply = require('../src/multiply.js')
/** @test {newContainer} */
describe('multiply function test', () => {

    it('should return an equivalent to `a * b` but curried ', () => {
        var a = Math.random();
        var b = Math.random();
        var result1 =  multiply(a)
        var result =  multiply(b)
        var supposedResult = a * b;
        expect(supposedResult).to.deep.equal(result)
    })
})
