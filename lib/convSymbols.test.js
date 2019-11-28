
const cs = require('./convSymbols')

test('checks null string', () => {
  expect(cs.convSymbols('')).toBe('')
})
test('checks string with no syms', () => {
  let a = 'now is the winter of our discontent'
  expect(cs.convSymbols(a)).toBe(a)
})
test('checks string with ~~', () => {
  let a = 'a ~~b c'
  let b = 'a b c'
  expect(cs.convSymbols(a)).toBe(b)
})
test('checks string with ~~ at start', () => {
  let a = '~~b c'
  let b = 'b c'
  expect(cs.convSymbols(a)).toBe(b)
})
test('checks string with ~B~ at start', () => {
  let a = '~B~b c'
  let b = '<b>b c'
  expect(cs.convSymbols(a)).toBe(b)
})
test('checks string with ~/~', () => {
  let a = 'a b~/~ c'
  let b = 'a b c'
  expect(cs.convSymbols(a)).toBe(b)
})
test('checks string with ~B~', () => {
  let a = 'a ~B~d e'
  let b = 'a <b>d e'
  expect(cs.convSymbols(a)).toBe(b)
})
test('checks string with ~/B~', () => {
  let a = 'a d~/B~ e'
  let b = 'a d</b> e'
  expect(cs.convSymbols(a)).toBe(b)
})
test('checks string with all syms', () => {
  let a = 'a ~~b~/~ c ~B~d~/B~ e'
  let b = 'a b c <b>d</b> e'
  expect(cs.convSymbols(a)).toBe(b)
})
