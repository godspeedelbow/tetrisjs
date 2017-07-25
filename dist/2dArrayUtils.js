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