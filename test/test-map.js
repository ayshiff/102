'use strict';
var expect = require('chai').expect
var map = require('../map.js')

describe('map function test', () => {

    it('should return map.(x => x * 2) ', () => {
        
        var array1 = [1, 4, 9, 16];
        var supposedResult = [2, 8, 18, 32]

        // pass a function to map
        const map1 = array1.map(x => x * 2);       
        
        // expected output: Array [2, 8, 18, 32]
        expect(map1).to.deep.equal(supposedResult)
    })

    it('shoud be curried  ', () => {
        
        var array1 = [1, 4, 9, 16];
        var supposedResult = [4, 16, 36, 64]

        // pass a function to map
        const map1 = array1.map(x => x * 2);       
        const map2 = map1.map(x => x * 2); 
        // expected output: Array [2, 8, 18, 32]
        expect(map2).to.deep.equal(supposedResult)
    })

})