const blocks = require('./blocks');
const {
    create: createBoard,
    clone: cloneBoard,
    changeCell,
    isWithinBounds,
    mapCells,
    findCell,
    isCellEmpty,
} = require('./2dArrayUtils');

module.exports = {
    blocks,
    createBoard,
    printBoard,
    canAddBlockToBoard,
    addBlockToBoard,
    rotateBlock,
    changeCell,
    mapCells,
    getCompletedRows,
    removeRowsAndFill,
};

function printBoard(board) {
    board.forEach(printRow);

    function printRow(row) {
        console.log(row.join(' '));
    }
}

function getCompletedRows(board) {
    return board
        .map((row, index) => {
            return row.every(cell => !!cell)
                ? index
                : false;
        })
        .filter(index => index !== false)
}

function removeRowsAndFill(board, rows) {
    const cols = board[0].length;
    return createBoard(rows.length, cols).concat(board
        .filter((el, index) => rows.indexOf(index) < 0)
    );
}

function canAddBlockToBoard(board, block, row, col) {
    return !findCell(block, (blockCell, blockRow, blockCol) => {
        if (blockCell === 0) return false; // ignore block's 0
        if (!isWithinBounds(board, row + blockRow, col + blockCol)) return true;
        if (!isCellEmpty(board, row + blockRow, col + blockCol)) return true;
        return false;
    });
}

function addBlockToBoard(board, block, row, col) {
    const newBoard = cloneBoard(board);
    mapCells(block, (cell, blockRow, blockCol) => {
        if (cell === 0) return; // ignore block's 0
        if (!isWithinBounds(board, row + blockRow, col + blockCol)) return;
        newBoard[row + blockRow][col + blockCol] = cell;
    });
    return newBoard;
}

function rotateBlock(block) {
    const rotatedBlock = [];
    // TODO: use mapCells
    for (let blockRowIndex = 0; blockRowIndex < block.length; blockRowIndex++) {
        const blockRow = block[blockRowIndex];
        for (let blockColIndex = 0; blockColIndex < blockRow.length; blockColIndex++) {
            const colIndex = blockRow.length - 1 - blockColIndex;
            rotatedBlock[blockColIndex] = rotatedBlock[blockColIndex] || [];
            rotatedBlock[blockColIndex][block.length - 1 - blockRowIndex] = block[blockRowIndex][blockColIndex];
        }
    }
    return rotatedBlock;
}
