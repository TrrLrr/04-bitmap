'use strict';

const fs = require('fs');
const bitMapwriter = require('./bitmap-writer.js');
const constructor = require('./bitmap-constructor.js');

module.exports = exports = {};

exports.blkToWhite = function(data) {
  console.log(typeof data);
  for (let i = 0; i < data.colorTable.length; i++) {
    if (data.colorTable[i] === 0) {
      data.colorTable[i] = 255;
    }
  }
  return data;
};

exports.toLateEighties = function(data) {
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

exports.diagonal = function(data) {
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

exports.redAndBlack = function(data) {
  for (let i = 0; i < data.pixels.length/2; i++) {
    data.pixels[i] = data.pixels[i] * 3;
  }
  return data;
};

exports.solid = function(data) {
  // for(let i = 0; i < data.pixels.length/2; i++) {
  //   data.pixels[i] = 12;
  // }

  for(let i = 0; i < data.colorTable.length; i++) {
    if(data.colorTable[i]%3 === 0) {
      data.colorTable[i] = 9;
    }
  }
  return data;
}

exports.greyscale = function (data) {
  for(var i = 0; i < data.colorTable.length; i += 4) {
    let avg = (data.colorTable[i] + data.colorTable[i+1] + data.colorTable[i+2]) / 3;
    data.colorTable[i] = avg;
    data.colorTable[i+1] = avg;
    data.colorTable[i+2] = avg;
  }
}

exports.bluescale = function (data) {
  for(var i = 0; i < data.colorTable.length; i += 4) {
    let avg = (data.colorTable[i] + data.colorTable[i+1] + data.colorTable[i+2]) / 3;
    data.colorTable[i] = avg;
    data.colorTable[i+1] = 0;
    data.colorTable[i+2] = 0;
  }
}

exports.greenscale = function (data) {
  for(var i = 0; i < data.colorTable.length; i += 4) {
    let avg = (data.colorTable[i] + data.colorTable[i+1] + data.colorTable[i+2]) / 3;
    data.colorTable[i] = 0;
    data.colorTable[i+1] = avg;
    data.colorTable[i+2] = 0;
  }
}

exports.redscale = function (data) {
  for(var i = 0; i < data.colorTable.length; i += 4) {
    let avg = (data.colorTable[i] + data.colorTable[i+1] + data.colorTable[i+2]) / 3;
    data.colorTable[i] = 0;
    data.colorTable[i+1] = 0;
    data.colorTable[i+2] = avg;
  }
}
