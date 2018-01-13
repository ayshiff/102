'use strict';
var expect = require('chai').expect
var newContainer = require('../src/mapFunctor.js')
var newContainer = require('../src/newContainer.js')
/** @test {mapFunctor} */
describe('newContainer function test', () => {

    it('should return a mapFunctor ', () => {
        var container = newContainer(15)
        var result =  container.mapFunctor(x => x + 2)
        var supposedResult = { _value:  17  }
        expect(supposedResult).to.deep.equal(result)
    })
})
