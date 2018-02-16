// bitmap-reader: reads components of the bitmap file

'use strict';

const fs = require('fs');

const bitMapReader = module.exports = function(file, callback) {
    const bmp = {};
    fs.readFile(file, function(err,data) {
        if(err) return callback(err);

        //The colors in the color table are usually specified in the 4-byte per entry RGBA32 format. 
        // https://en.wikipedia.org/wiki/RGBA_color_space#RGBAX_notation

        bmp.type = data.toString('utf-8', 0, 2);
        bmp.size = data.readInt32LE(2);
        // size of bitmap in bytes
        bmp.offset = data.readInt32LE(10);
        bmp.headerSize = data.readInt32LE(14);
        //number of bytes in DIB header from this point
        bmp.width = data.readInt32LE(18);
        bmp.height = data.readInt32LE(22);
        bmp.colorPlanes = data.readInt32LE(26);
        bmp.bitsPerPix = data.readInt32LE(28);
        // 8 bits per pixel
        bmp.comp = data.readInt32LE(30);
        // no compression used
        bmp.rawBmpDataSize = data.readInt32LE(34);
        // raw bitmap data size = 1000
        bmp.pxPerMeterHorizontal = data.readInt32LE(38);
        bmp.pxPerMeterVertical = data.readInt32LE(42);
        bmp.colorNum = data.readInt32LE(46);
        // num of colors in palette (256)
        bmp.importantColor = data.readInt32LE(50);

        bmp.colorTable = data.readInt32LE(54);
        bmp.pxArrStart = data.slice(1078, data.length);
        // per the file header, pixel array should start at 1078

        console.log(bmp);
    })
    //bmp.pixels = new Uint32Array(bitmap, bmp.offset); 
    //console.log(bitmap.slice(54,bmp.offset));
    //console.log(bmp.pixels.toString());
}