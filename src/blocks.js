const {
    mapCells,
} = require('./2dArrayUtils');

module.exports = [
    [
        [1, 1],
        [1, 1],
    ],
    [
        [1],
        [1],
        [1],
        [1],
    ],
    [
        [1, 1, 0],
        [0, 1, 1],
    ],
    [
        [0, 1, 1],
        [1, 1, 0],
    ],
    [
        [1, 1],
        [1, 0],
        [1, 0],
    ],
    [
        [1, 0],
        [1, 0],
        [1, 1],
    ],
    [
        [1, 0],
        [1, 1],
        [1, 0],
    ],
].map(colorBlock);

function colorBlock(block, index) {
    return mapCells(block, cell => cell ? index + 1 : cell);
}
