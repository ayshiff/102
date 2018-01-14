'use strict';
var expect = require('chai').expect
var multiply = require('../src/multiply.js')
/** @test {newContainer} */
describe('multiply function test', () => {

    it('should return an equivalent to `a * b` but curried ', () => {
        var a = Math.random();
        var b = Math.random();
        var result = multiply(a,b)
        var supposedResult = a * b;
        expect(supposedResult).to.deep.equal(result)
    })
    /*
    it('should return an equivalent to `a * b` but curried ', () => {
        var double = multiply(2)
        var triple = multiply(3)
        var result = double(3);
        var supposedResult = 6;
        expect(supposedResult).to.deep.equal(result)
    })
    */
})
