'use strict';
var expect = require('chai').expect
var multiply = require('../src/divide.js')
/** @test {newContainer} */
describe('divide function test', () => {

    it('should return an equivalent to `a / b` but curried ', () => {
        var a = Math.random();
        var b = Math.random();
        var result = divide(a,b)
        var supposedResult = a / b;
        expect(supposedResult).to.deep.equal(result)
    })
    
    it('should return 3 / 2 from a curried function  ', () => {
        var double = divide(6)
        var result = double(3)
        var supposedResult = 2;
        expect(supposedResult).to.deep.equal(result)
    })
    
})
