'use strict';
var expect = require('chai').expect
var compose = require('../compose.js')

describe('compose function test', () => {
    it('should return f(g(x))', () => {
        var argument = Math.random()
        var f = function(x) { return x - 3; }
        var g = function(x) { return x * 4; }
        var supposedResult = f(g(argument))
        var composed = compose(f, g)
        var result = composed(argument)
        expect(result).to.equal(supposedResult);
    })
})