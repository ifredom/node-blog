var main = require('../no6mocha')
var should = require('should');

describe('mocha/main.test.js', function() {
    it('should equal 55 when n === 10', function() {
        main.fibonacci(10).should.equal(55)
    })
    it('should equal 0 when n === 0', function() {
        main.fibonacci(0).should.equal(0)
    })
    it('should equal 1 when n === 1', function() {
        main.fibonacci(1).should.equal(1)
    })
    it('should throw when n >10', function() {
        (function() {
            main.fibonacci(11)
        }).should.throw('n should <= 10');
    })
    it('should throw when n <0', function() {
        (function() {
            main.fibonacci(-1)
        }).should.throw('n should > 0');
    })
})