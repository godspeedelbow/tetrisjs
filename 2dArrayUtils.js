module.exports = {
    create,
    clone,
    changeCell,
    isWithinBounds,
    mapCells,
    findCell,
    isCellEmpty,
};

function create(rows, cols) {
    const board = [];
    for (let row = 0; row < rows; row++) {
        board[row] = [];
        for (let col = 0; col < cols; col++) {
            board[row][col] = 0;
        }
    }
    return board;
}


function clone(board) {
    return mapCells(board, cell => cell);
}

function changeCell(board, row, col, cell) {
    const newBoard = clone(board);
    newBoard[row][col] = cell;
    return newBoard;
}

function isWithinBounds(twoDimArray, row, col) {
    const rows = twoDimArray.length;
    const cols = twoDimArray[0].length;
    if (row >= rows) return false;
    if (col >= cols) return false;
    return true;
}

function mapCells(twoDimArray, callback) {
    return twoDimArray.map((row, rowIndex) => {
        return row.map((cell, colIndex) => {
            return callback(cell, rowIndex, colIndex);
        });
    });
}

/*
 * finds first cell for which callback returns truthy
 */
function findCell(twoDimArray, callback) {
    const rows = twoDimArray.length;
    const cols = twoDimArray[0].length;
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const cell = twoDimArray[row][col];
            if (callback(cell, row, col)) return cell;
        }
    }
    return false;
}

function isCellEmpty(board, row, col) {
    return !board[row][col];
}
