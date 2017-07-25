const {
    blocks,
    createBoard,
    changeCell,
    rotateBlock,
    canAddBlockToBoard,
    addBlockToBoard,
    printBoard,
} = require('./tetris');

const rows = 8;
const cols = 5;
let board = createBoard(rows, cols);

board = changeCell(board, rows - 1, 0, 1);
board = changeCell(board, rows - 1, 1, 1);
board = changeCell(board, rows - 2, 0, 1);

let block = blocks[3];
let previousBoard = board;
const col = 1;
for (let row = 0; row < rows; row++) {
    block = rotateBlock(block);
    if (canAddBlockToBoard(board, block, row, col)) {
        const newBoard = addBlockToBoard(previousBoard, block, row, col);
        printBoard(newBoard);
        console.log('')
    } else {
        console.log(false)
    }
}
