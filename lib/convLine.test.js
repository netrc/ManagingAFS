
const cl = require('./convLine')

test('checks null line', () => {
  let {l, cs} = cl.convLine('', 'normal')
  expect(l).toBe('')
})

test('checks preface', () => {
  let {l, cs} = cl.convLine('PREFACE', 'normal')
  expect(l).toBe('\n# Preface')
})

test('checks chapter ', () => {
  let {l, cs} = cl.convLine('CHAPTER 1: SOMETHING FOO', 'normal')
  expect(l).toBe('# Something Foo')
})

test('checks section', () => {
  let {l, cs} = cl.convLine('SECTION: A SECTION HEADING', 'normal')
  expect(l).toBe('## A Section Heading')
})

test('checks PROGRAM start', () => {
  let {l, cs} = cl.convLine('PROGRAM', 'normal')
  expect(l).toBe('<pre>')
  expect(cs).toBe('in program')
})

test('checks PROGRAM end', () => {
  let {l, cs} = cl.convLine('PROGRAM', 'in program')
  expect(l).toBe('</pre>')
  expect(cs).toBe('normal')
})

test('checks figure end', () => {
  let {l, cs} = cl.convLine('[[Figure 1-1: The AFS Architecture]]', 'normal')
  expect(l).toBe(`<img src="newfigs/fig1.jpg" alt="Figure 1-1: The AFS Architecture" height="458" width="638"/> <p>Figure 1-1: The AFS Architecture</p>`)
})

test('checks misc text ', () => {
  let t = 'just some non program non section non CHapter text'
  let {l, cs} = cl.convLine(t, 'normal')
  expect(t).toBe(t)
})
