'use strict';
var expect = require('chai').expect
var isEmpty = require('../src/isEmpty.js')
/** @test {isEmpty} */
describe('isEmpty function test', () => {

    it('isEmpty(val) should return false ', () => {
        var valeur = Math.random()
        var supposedResult = false
        var result = isEmpty(valeur)
        expect(result).to.equal(supposedResult)
    })

    it('isEmpty(null) should return true ', () => {
        var valeur = null
        var supposedResult = true
        var result = isEmpty(valeur)
        expect(result).to.equal(supposedResult)
    })

    it('isEmpty(undefined) should return true ', () => {
        var valeur = undefined
        var supposedResult = true
        var result = isEmpty(valeur)
        expect(result).to.equal(supposedResult)
    })
})