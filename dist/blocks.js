'use strict';

var _require = require('./2dArrayUtils'),
    mapCells = _require.mapCells;

module.exports = [[[1, 1], [1, 1]], [[1], [1], [1], [1]], [[1, 1, 0], [0, 1, 1]], [[0, 1, 1], [1, 1, 0]], [[1, 1, 0], [1, 0, 0], [1, 0, 0]], [[1, 0, 0], [1, 0, 0], [1, 1, 0]]].map(colorBlock);

function colorBlock(block, index) {
    return mapCells(block, function (cell) {
        return cell ? index + 1 : cell;
    });
}