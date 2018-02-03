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

    it('isInteger(null) should return false ', () => {
        var valeur = null;
        var supposedResult = false;
        var result = isInteger(valeur)
        expect(result).to.equal(supposedResult)
    })

    it('isInteger(undefined) should return false ', () => {
        var valeur = undefined;
        var supposedResult = false;
        var result = isInteger(valeur)
        expect(result).to.equal(supposedResult)
    })

    it('isInteger("string") should return false ', () => {
        var valeur = "string";
        var supposedResult = false;
        var result = isInteger(valeur)
        expect(result).to.equal(supposedResult)
    })
})