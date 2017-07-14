# tetrisjs
Functional tetris

A functional (pure, side-effect free) tetris logic libary.

*NOTE*: warning I've spent only a couple hours on this so far:

- likely to change
- no tests
- sparse example

## Structure

Works with 2 dimensional arrays (`[0][0]` = top left) to represent:

- the board[rows][cols]: each cell is a number which specifies a color (specific to each type of block)

- a block[rows][cols]: a tetris block (see `./blocks.js`)

## Usage

```
const {
    blocks,
    createBoard,
    printBoard,
    canAddBlockToBoard,
    addBlockToBoard,
    rotateBlock,
    changeCell,
} = require('./tetris') ;
```

- `blocks`: exposes tetris blocks defined in `blocks.js`
- `createBoard(rows, cols): board`: create a board with size of `rows` x `cols`
- `printBoard(board): board`: `console.log`s `board`
- `canAddBlockToBoard(board, block, row, col): boolean`: can `block` be added to `board` at position `row`, `col`
- `addBlockToBoard(board, block, row, col): board`: create new board with `block` added to `board` at position `row`, `col`
- `rotateBlock(block): block`: creates a new `block` turned clockwise
- `changeCell(board, row, col, cell): board`: create new board with `cell` added to `board` at position `row`, `col`

## Files

- `tetris.js`: logic to 'mutate' boards and blocks

- `example.js`: shows how to use `tetris.js`

- `blocks.js`: the different types of tetris blocks

- `2dArrayUtils.js`: common low-level functions to 'mutate' boards and blocks
