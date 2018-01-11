'use strict';
var expect = require('chai').expect
var map = require('../map.js')

describe('map function test', () => {

    it('map f(x, arg) should return  ', () => {
        
        var array1 = [1, 4, 9, 16];
        var supposedResult = [2, 8, 18, 32]
        
        // pass a function to map
        const map1 = array1.map(x => x * 2);       
        
        // expected output: Array [2, 8, 18, 32]
        expect(map1).to.deep.equal(supposedResult)
    })
})