var calcu = require('./01calcu.js');

var should = require('should');

describe( '测试模块的add方法', () => {
    it('1 + 2 should = 4', () => {
        calcu.add( 1, 2).should.equal(4)
        })
    it('3 + 2 should = 4', () => {
        calcu.add( 3, 2).should.equal(4)
        })
})