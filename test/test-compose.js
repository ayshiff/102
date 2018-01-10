'use strict';
var expect = require('chai').expect
var compose = require('../compose.js')

describe('compose function test', () => {

    it('compose (f, g) (x) should return f(g(x))', () => {
        var argument = Math.random()
        var f = function(x) { return x - 3; }
        var g = function(x) { return x * 4; }
        var supposedResult = f(g(argument))
        var composed = compose(f, g)
        var result = composed(argument)
        expect(result).to.equal(supposedResult);
    })

    it('compose (f, g) (x, y) should return f(g(x, y))', () => {
        var x = Math.random()
        var y = Math.random()
        var f = function(x) { return x - 2; }
        var g = function(x, y) { return x * y; }
        var supposedResult = f(g(x, y))
        var composed = compose(f, g)
        var result = composed(x, y)
        expect(result).to.equal(supposedResult);
    })
})