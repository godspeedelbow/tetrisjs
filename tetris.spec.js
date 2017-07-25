const assert = require('assert');

const {
  getCompletedRows,
} = require('./tetris');

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

console.log('all tests pass');
