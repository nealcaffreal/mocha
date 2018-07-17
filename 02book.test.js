var { expect } = require('chai');

var book = require('./02book.js');

describe('异步读取文件信息', () => {
    it('read book async', (done) => {
        book.read( ( err, result ) => {
            expect( err ).equal( null );
            expect( result ).to.be.a('string');
            done();
        })
    })
})


//  let book = require('./02book');
// let expect = require("chai").expect;
// 
// describe("async", () => {
//   it('read book async', function (done) {
//     book.read((err, result) => {
//       expect(err).equal(null);
//       expect(result).to.be.a('string');
//       done();
//     })
//   })
// })