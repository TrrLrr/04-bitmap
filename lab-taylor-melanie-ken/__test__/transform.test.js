'use strict';

const bitMapWriter = require('../lib/bitmap-writer.js');
const constructor = require('../lib/bitmap-constructor.js');
const transform = require('../lib/transform.js');
require('jest');

describe('File Reader/Writer Module', function() {
  describe('with an incorrect file path', function() {
    it('should return an error', function(done) {
      // assertions
      bitMapWriter(`${__dirname}/nothingHere.txt`, function(err) {
        expect(err).toBeTruthy();
        expect(typeof err).toBe('object');
        expect(err.code).toBe('ENOENT');
      });
      done();
    });
  });
  describe('with proper file path', function() {
    it('should return the content of the file', function(done) {
      //assertions
      bitMapWriter(`${__dirname}/..lib/bitmap-writer.js`, function(err, data) {
        expect(err).toBe(null);
        expect(typeof data).toBe('data');
      });
      done();
    });
  });
});

// describe('Constructor Module', function() {
//   describe('with an improper file path', function() {
//     it('should return an error', function(done) {
//       // assertions
//       constructor(`${__dirname}/notHere.txt`, function(err) {
//         expect(err).toBeTruthy();
//         expect(typeof err).toBe('object');
//         expect(err.code).toBe('ENOENT');
//       });
//       done();
//     });
//   });
//   describe('with the proper file path', function() {
//     it('should return the content of the file', function(done) {
//       //assertions
//       constructor(`${__dirname}/..lib/bitmap-constructor.js`, function(err, data) {
//         expect(err).toBe(null);
//         expect(typeof data).toBe('data');
//       });
//       done();
//     });
//   });
// });

describe('Transform Module', function() {
  describe('#invert', function() {
    describe('with an improper file path', function() {
      it('should return an error', function(done) {
        // assertions
        transform.invert(`${__dirname}/notta.txt`, function(err) {
          expect(err).toBeTruthy();
          expect(typeof err).toBe('object');
          expect(err.code).toBe('ENOENT');
        });
        done();
      });
    });
    describe('with the correct file path', function() {
      it('should return the content of the file', function(done) {
        //assertions
        transform.invert(`${__dirname}/../data/palette-bitmap.bmp`, function(err, data) {
          expect(err).toBe(null);
          expect(typeof data).toBe('data');
        });
        done();
      });
    });
  });
  describe('#diagonal', function() {
    describe('with an improper file path', function() {
      it('should return an error', function(done) {
        // assertions
        transform.diagonal(`${__dirname}/notta.txt`, function(err) {
          expect(err).toBeTruthy();
          expect(typeof err).toBe('object');
          expect(err.code).toBe('ENOENT');
        });
        done();
      });
    });
    describe('with the correct file path', function() {
      it('should return the content of the file', function(done) {
        //assertions
        transform.diagonal(`${__dirname}/../data/palette-bitmap.bmp`, function(err, data) {
          expect(err).toBe(null);
          expect(typeof data).toBe('data');
        });
        done();
      });
    });
  });
  describe('#toLateEighties', function() {
    describe('with an improper file path', function() {
      it('should return an error', function(done) {
        // assertions
        transform.toLateEighties(`${__dirname}/notta.txt`, function(err) {
          expect(err).toBeTruthy();
          expect(typeof err).toBe('object');
          expect(err.code).toBe('ENOENT');
        });
        done();
      });
    });
    describe('with the correct file path', function() {
      it('should return the content of the file', function(done) {
        //assertions
        transform.toLateEighties(`${__dirname}/../data/palette-bitmap.bmp`, function(err, data) {
          expect(err).toBe(null);
          expect(typeof data).toBe('data');
        });
        done();
      });
    });
  });
  describe('#blkToWhite', function() {
    describe('with an improper file path', function() {
      it('should return an error', function(done) {
        // assertions
        transform.blkToWhite(`${__dirname}/notta.txt`, function(err) {
          expect(err).toBeTruthy();
          expect(typeof err).toBe('object');
          expect(err.code).toBe('ENOENT');
        });
        done();
      });
    });
    describe('with the correct file path', function() {
      it('should return the content of the file', function(done) {
        //assertions
        transform.blkToWhite(`${__dirname}/../data/palette-bitmap.bmp`, function(err, data) {
          expect(err).toBe(null);
          expect(typeof data).toBe('data');
        });
        done();
      });
    });
  });
  describe('#greyscale', function() {
    describe('with an improper file path', function() {
      it('should return an error', function(done) {
        // assertions
        transform.greyscale(`${__dirname}/notta.txt`, function(err) {
          expect(err).toBeTruthy();
          expect(typeof err).toBe('object');
          expect(err.code).toBe('ENOENT');
        });
        done();
      });
    });
    describe('with the correct file path', function() {
      it('should return the content of the file', function(done) {
        //assertions
        transform.greyscale(`${__dirname}/../data/palette-bitmap.bmp`, function(err, data) {
          expect(err).toBe(null);
          expect(typeof data).toBe('data');
        });
        done();
      });
    });
  });
  describe('#redAndBlack', function() {
    describe('with an improper file path', function() {
      it('should return an error', function(done) {
        // assertions
        transform.redAndBlack(`${__dirname}/notta.txt`, function(err) {
          expect(err).toBeTruthy();
          expect(typeof err).toBe('object');
          expect(err.code).toBe('ENOENT');
        });
        done();
      });
    });
    describe('with the correct file path', function() {
      it('should return the content of the file', function(done) {
        //assertions
        transform.redAndBlack(`${__dirname}/../data/palette-bitmap.bmp`, function(err, data) {
          expect(err).toBe(null);
          expect(typeof data).toBe('data');
        });
        done();
      });
    });
  });
});