"use strict";

module.exports = {
    create: create,
    clone: clone,
    changeCell: changeCell,
    isWithinBounds: isWithinBounds,
    mapCells: mapCells,
    findCell: findCell,
    isCellEmpty: isCellEmpty
};

function create(rows, cols) {
    var board = [];
    for (var row = 0; row < rows; row++) {
        board[row] = [];
        for (var col = 0; col < cols; col++) {
            board[row][col] = 0;
        }
    }
    return board;
}

function clone(board) {
    return mapCells(board, function (cell) {
        return cell;
    });
}

function changeCell(board, row, col, cell) {
    var newBoard = clone(board);
    newBoard[row][col] = cell;
    return newBoard;
}

function isWithinBounds(twoDimArray, row, col) {
    var rows = twoDimArray.length;
    var cols = twoDimArray[0].length;
    if (row >= rows) return false;
    if (col >= cols) return false;
    return true;
}

function mapCells(twoDimArray, callback) {
    return twoDimArray.map(function (row, rowIndex) {
        return row.map(function (cell, colIndex) {
            return callback(cell, rowIndex, colIndex);
        });
    });
}

/*
 * finds first cell for which callback returns truthy
 */
function findCell(twoDimArray, callback) {
    var rows = twoDimArray.length;
    var cols = twoDimArray[0].length;
    for (var row = 0; row < rows; row++) {
        for (var col = 0; col < cols; col++) {
            var cell = twoDimArray[row][col];
            if (callback(cell, row, col)) return cell;
        }
    }
    return false;
}

function isCellEmpty(board, row, col) {
    return !board[row][col];
}
'use strict';

var _require = require('./2dArrayUtils'),
    mapCells = _require.mapCells;

module.exports = [[[1, 1], [1, 1]], [[1], [1], [1], [1]], [[1, 1, 0], [0, 1, 1]], [[0, 1, 1], [1, 1, 0]], [[1, 1, 0], [1, 0, 0], [1, 0, 0]], [[1, 0, 0], [1, 0, 0], [1, 1, 0]]].map(colorBlock);

function colorBlock(block, index) {
    return mapCells(block, function (cell) {
        return cell ? index + 1 : cell;
    });
}
'use strict';

var blocks = require('./blocks');

var _require = require('./2dArrayUtils'),
    createBoard = _require.create,
    cloneBoard = _require.clone,
    changeCell = _require.changeCell,
    isWithinBounds = _require.isWithinBounds,
    mapCells = _require.mapCells,
    findCell = _require.findCell,
    isCellEmpty = _require.isCellEmpty;

module.exports = {
    blocks: blocks,
    createBoard: createBoard,
    printBoard: printBoard,
    canAddBlockToBoard: canAddBlockToBoard,
    addBlockToBoard: addBlockToBoard,
    rotateBlock: rotateBlock,
    changeCell: changeCell,
    mapCells: mapCells,
    getCompletedRows: getCompletedRows,
    removeRowsAndFill: removeRowsAndFill
};

function printBoard(board) {
    board.forEach(printRow);

    function printRow(row) {
        console.log(row.join(' '));
    }
}

function getCompletedRows(board) {
    return board.map(function (row, index) {
        return row.every(function (cell) {
            return !!cell;
        }) ? index : false;
    }).filter(function (index) {
        return index !== false;
    });
}

function removeRowsAndFill(board, rows) {
    var cols = board[0].length;
    return createBoard(rows.length, cols).concat(board.filter(function (el, index) {
        return rows.indexOf(index) < 0;
    }));
}

function canAddBlockToBoard(board, block, row, col) {
    if (row < 0 || col < 0) return false;

    return !findCell(block, function (blockCell, blockRow, blockCol) {
        if (blockCell === 0) return false; // ignore block's 0
        if (!isWithinBounds(board, row + blockRow, col + blockCol)) return true;
        if (!isCellEmpty(board, row + blockRow, col + blockCol)) return true;
        return false;
    });
}

function addBlockToBoard(board, block, row, col) {
    var newBoard = cloneBoard(board);
    mapCells(block, function (cell, blockRow, blockCol) {
        if (cell === 0) return; // ignore block's 0
        if (!isWithinBounds(board, row + blockRow, col + blockCol)) return;
        newBoard[row + blockRow][col + blockCol] = cell;
    });
    return newBoard;
}

function rotateBlock(block) {
    var rotatedBlock = [];
    // TODO: use mapCells
    for (var blockRowIndex = 0; blockRowIndex < block.length; blockRowIndex++) {
        var blockRow = block[blockRowIndex];
        for (var blockColIndex = 0; blockColIndex < blockRow.length; blockColIndex++) {
            var colIndex = blockRow.length - 1 - blockColIndex;
            rotatedBlock[blockColIndex] = rotatedBlock[blockColIndex] || [];
            rotatedBlock[blockColIndex][block.length - 1 - blockRowIndex] = block[blockRowIndex][blockColIndex];
        }
    }
    return rotatedBlock;
}
