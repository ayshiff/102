'use strict';
var expect = require('chai').expect
var newContainer = require('../src/newContainer.js')
/** @test {newContainer} */
describe('newContainer function test', () => {

    it('should return a new Container with the _value arg ', () => {
        var arg = 15;
        var result =  newContainer(arg)
        var supposedResult = { _value:  arg  }
        expect(supposedResult).to.deep.equal(result)
    })

    it('should return a new Container with the _value null ', () => {
        var arg = null;
        var result =  newContainer(arg)
        var supposedResult = { _value:  arg  }
        expect(supposedResult).to.deep.equal(result)
    })
})
