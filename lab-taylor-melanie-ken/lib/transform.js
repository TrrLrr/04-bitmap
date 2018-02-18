'use strict';

const fs = require('fs');
const bitMapwriter = require('./bitmap-writer.js');
const constructor = require('./bitmap-constructor.js');

module.exports = exports = {};

exports.blkToWhite = function(err, data) {
  if(err) return err;
  for (let i = 0; i < data.colorTable.length; i++) {
    if (data.colorTable[i] === 0) {
      data.colorTable[i] = 255;
    }
  }
  return data;
};

exports.toLateEighties = function(err, data) {
  if(err) return err;   
  for (let i = 0; i < data.colorTable.length; i++) {
    if (i % 3 === 0) {
      data.colorTable[i] = i - 102;
    }
  }
  return data;
};

exports.invert = function(err, data) {
  if(err) return err;
  data.pixels.reverse();
  return data;
};

exports.diagonal = function(err, data) {
  if(err) return err;
  for (let i = 0; i < data.pixels.length; i++) {
    data.pixels[i * 2] = 1;
    data.pixels[i * 3] = 0;
  }
  for (let i = 2500; i > 0; i--) {
    data.pixels[i * 2] = 20;
    data.pixels[i * 3] = 1;
  }
  return data;
};

exports.redAndBlack = function(err, data) {
  if(err) return err;
  for (let i = 0; i < data.pixels.length/2; i++) {
    data.pixels[i] = data.pixels[i] * 3;
  }
  return data;
};
