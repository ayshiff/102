'use strict';
var expect = require('chai').expect
var isInteger = require('../src/isInteger.js')
/** @test {isInteger} */
describe('isInteger function test', () => {

    it('isInteger(val) ', () => {
        var valeur = 15;
        var supposedResult = true;
        var result = isInteger(valeur)
        expect(result).to.equal(supposedResult)
    })
})