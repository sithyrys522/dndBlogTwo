const expect = require("chai").expect;
const request = require("request");

let url = "http://localhost:3000";

describe("Page status and content", function () {
  describe("Main page", function () {
    it("Should return 200", function (done) {
      request(url, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });
  describe("First Article page", function () {
    it("Should return 200", function (done) {
      request(url + "/articles/1", function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });
  describe("Everything else", function () {
    it("should 404", function (done) {
      request(url + "/foo/bar", function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });
});
