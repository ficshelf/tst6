'use strict';

var _chai = require('chai');

var _main = require('../src/main.js');

var app = _interopRequireWildcard(_main);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//import chai from 'chai';
var supertest = require("supertest"); //supertest is still oldschool

var api = supertest('http://localhost:3000/');

describe('application logic', function () {

  describe('get JSON', function () {
    it('Should get 200 OK when getting data in JSON format', function (done) {
      api.get('/response.json').set('Accept', 'application/json').expect(200, done);
    });

    it('should receive given data as JSON body', function () {
      var data = [{
        "id": 1,
        "name": "MockSpace",
        "external_id": "1",
        "impressions": 52721284,
        "clicks": 93149
      }];
      var dataJson = JSON.stringify(data);

      api.get('/response.json').set('Accept', 'application/json').expect(function (res) {
        res.body.should.equal(dataJson);
      });
    });
  });

  describe('get XML', function () {
    it('Should get 200 OK when getting data in XML format', function (done) {
      api.get('/response.xml').set('Accept', 'application/xml').expect(200, done);
    });
  });

  describe('test loadData options', function () {
    it('Should return format name when called with permitted format: JSON', function (done) {
      app.loadData('JSON').expect('JSON', done);
    });
    it('Should return format name when called with permitted format: XML', function (done) {
      loadData('XML').expect('XML', done);
    });
    it('Should return format name when called with permitted format', function (done) {
      loadData('XML').expect('JSON', done);
    });
    it('Should throw "Rogue select value" when called with unexpected format', function (done) {
      loadData('BLOB').expect().to.throw('Rogue select value');
    });
  });
});
