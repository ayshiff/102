'use strict';
var expect = require('chai').expect
var isNumber = require('../src/isNumber.js')
/** @test {isNumber} */
describe('isNumber function test', () => {

    it('isNumber(val) should return true  ', () => {
        var valeur = Math.random();
        var supposedResult = true;
        var result = isNumber(valeur)
        expect(result).to.equal(supposedResult)
    })

    it('isNumber(null) should return false ', () => {
        var valeur = null;
        var supposedResult = false;
        var result = isNumber(valeur)
        expect(result).to.equal(supposedResult)
    })

    it('isNumber(undefined) should return false ', () => {
        var valeur = undefined;
        var supposedResult = false;
        var result = isNumber(valeur)
        expect(result).to.equal(supposedResult)
    })
})