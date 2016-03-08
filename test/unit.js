//import chai from 'chai';
import {expect} from 'chai';
import {should} from 'chai';
//import * as app from '../src/main.js';

var supertest = require("supertest");   //supertest is still oldschool

var api = supertest('http://localhost:3000/');

describe('application logic', () => {

  describe('get JSON', () => {
    it('Should get 200 OK when getting data in JSON format', (done) => {
     api.get('/response.json')
     .set('Accept', 'application/json')
     .expect(200, done) 
    });

    it('should receive given data as JSON body', function() {
    let data = [
    {
        "id": 1,
        "name": "MockSpace",
        "external_id": "1",
        "impressions": 52721284,
        "clicks": 93149
    }
    ] ;
    let dataJson = JSON.stringify(data);
     
    api.get('/response.json')
     .set('Accept', 'application/json')
      .expect(function(res) {
        res.body.should.equal(dataJson);
      })

    });

  });

  describe('get XML', () => {
    it('Should get 200 OK when getting data in XML format', (done) => {
     api.get('/response.xml')
     .set('Accept', 'application/xml')
     .expect(200, done) 
    });
  });
/*
  describe('test loadData options', () => {
    it('Should return format name when called with permitted format: JSON', (done) => {
     app.loadData('JSON').expect('JSON', done) 
    });
    it('Should return format name when called with permitted format: XML', (done) => {
     loadData('XML').expect('XML', done) 
    });
    it('Should return format name when called with permitted format', (done) => {
     loadData('XML').expect('JSON', done) 
    });
    it('Should throw "Rogue select value" when called with unexpected format', (done) => {
     loadData('BLOB').expect().to.throw('Rogue select value'); 
    });
  });
*/

});
