'use strict';

var _require = require('./tetris'),
    blocks = _require.blocks,
    createBoard = _require.createBoard,
    changeCell = _require.changeCell,
    rotateBlock = _require.rotateBlock,
    canAddBlockToBoard = _require.canAddBlockToBoard,
    addBlockToBoard = _require.addBlockToBoard,
    printBoard = _require.printBoard;

var rows = 8;
var cols = 5;
var board = createBoard(rows, cols);

board = changeCell(board, rows - 1, 0, 1);
board = changeCell(board, rows - 1, 1, 1);
board = changeCell(board, rows - 2, 0, 1);

var block = blocks[3];
var previousBoard = board;
var col = 1;
for (var row = 0; row < rows; row++) {
    block = rotateBlock(block);
    if (canAddBlockToBoard(board, block, row, col)) {
        var newBoard = addBlockToBoard(previousBoard, block, row, col);
        printBoard(newBoard);
        console.log('');
    } else {
        console.log(false);
    }
}