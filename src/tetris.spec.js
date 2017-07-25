const assert = require('assert');

const {
  canAddBlockToBoard,
  getCompletedRows,
  removeRowsAndFill,
} = require('./tetris');

/* canAddBlockToBoard */
assert.deepEqual(canAddBlockToBoard([
  [0],
], [
  [1],
], -1, 0), false, 'cannot add block with negative row')

assert.deepEqual(canAddBlockToBoard([
  [0],
], [
  [1],
], 0, -1), false, 'cannot add block with negative col')

assert.deepEqual(canAddBlockToBoard([
  [1],
], [
  [1],
], 0, 0), false, 'cannot add block to filled cell')

assert.deepEqual(canAddBlockToBoard([
  [0],
], [
  [1],
], 0, 1), false, 'cannot add block right of board')

assert.deepEqual(canAddBlockToBoard([
  [0],
], [
  [1],
], 1, 0), false, 'cannot add block below board')

assert.deepEqual(canAddBlockToBoard([
  [0, 0],
], [
  [1, 1],
], 0, 1), false, 'cannot add block that extends outside board')

assert.deepEqual(canAddBlockToBoard([
  [0],
], [
  [1],
], 0, 0), true, 'can add single block to empty cell')

assert.deepEqual(canAddBlockToBoard([
  [0, 1],
  [0, 0],
  [1, 0],
  [1, 1],
], [
  [1, 0],
  [1, 1],
  [0, 1],
  [0, 0],
], 0, 0), true, 'can add block to empty cells')


/* getCompletedRows */
assert.deepEqual(getCompletedRows([
  [0]
]), [], '1 cell board contains no completed rows');

assert.deepEqual(getCompletedRows([
  [1]
]), [0], '1 cell board contains completed row');

assert.deepEqual(getCompletedRows([
  [1, 1, 0]
]), [], '1 row board contains no completed rows');

assert.deepEqual(getCompletedRows([
  [1, 1]
]), [0], '1 row board contains completed row');

assert.deepEqual(getCompletedRows([
  [1, 0],
  [0, 1],
  [0, 2],
]), [], 'board contains no completed rows');

assert.deepEqual(getCompletedRows([
  [1, 0],
  [0, 1],
  [1, 2],
]), [2], 'board contains 1 completed row');

assert.deepEqual(getCompletedRows([
  [1, 1],
  [8, 0],
  [1, 2],
]), [0, 2], 'board contains multiple completed rows');

/* removeRowsAndFill */
assert.deepEqual(removeRowsAndFill([
  [1]
], [0]), [
  [0],
], 'remove row from 1 celled board');

assert.deepEqual(removeRowsAndFill([
  [1, 1],
], [0]), [
  [0, 0],
], 'remove row from 1 rowed board');

assert.deepEqual(removeRowsAndFill([
  [0, 1],
  [3, 3],
  [2, 0],
], [0]), [
  [0, 0],
  [3, 3],
  [2, 0],
], 'remove first row from 2 rowed board');

assert.deepEqual(removeRowsAndFill([
  [0, 1],
  [3, 3],
  [2, 0],
], [2]), [
  [0, 0],
  [0, 1],
  [3, 3]
], 'remove last row from 2 rowed board');

assert.deepEqual(removeRowsAndFill([
  [1, 1],
  [2, 2],
  [3, 3],
], [0, 1, 2]), [
  [0, 0],
  [0, 0],
  [0, 0],
], 'remove mulitple rows');

console.log('all tests pass');
