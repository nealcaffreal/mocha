let expect = require("chai").expect;
let request = require('supertest');

describe("api", () => {
  it('get douban information', function (done) {
    request('https://api.doubanlol.com')
      .get('/v2/movie/top250')
      .expect(200)
      .expect('Content-Type', /html/)
      .end(function (err, res) {
          console.log(res)
        expect(res).to.be.an('object');
        done();
      });
  })
})