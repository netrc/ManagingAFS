
const c8b = require('./conv8bitBuffer')

test('checks null buffer', () => {
  let b = Buffer.from('')
  let c = ''
  expect(c8b.conv8bitBuffer(b)).toBe(c)
})

test('checks trademark in buffer', () => {
  let b = Buffer.from([ 0x6e, 0x6f, 0x77, 0x20, 0x69, 0x73, c8b.chr_tm, 0x20, 0x74, 0x68, 0x65, 0x20, 0x77, 0x69, 0x6e, 0x74, 0x65, 0x72 ])
  let c = 'now is&trade; the winter'
  expect(c8b.conv8bitBuffer(b)).toBe(c)
})

test('checks copyright in buffer', () => {
  let b = Buffer.from([ 0x6e, 0x6f, 0x77, 0x20, 0x69, 0x73, c8b.chr_cp, 0x20, 0x74, 0x68, 0x65, 0x20, 0x77, 0x69, 0x6e, 0x74, 0x65, 0x72 ])
  let c = 'now is&copy; the winter'
  expect(c8b.conv8bitBuffer(b)).toBe(c)
})

test('checks several copyright, tm in buffer', () => {
  let b = Buffer.from([ c8b.chr_cp, 0x6e, 0x6f, 0x77, c8b.chr_tm, 0x20, 0x69, 0x73, c8b.chr_cp, 0x20, 0x74, 0x68, 0x65, c8b.chr_tm, c8b.chr_cp, 0x20, 0x77, 0x69, 0x6e, 0x74, 0x65, 0x72, c8b.chr_tm ])
  let c = '&copy;now&trade; is&copy; the&trade;&copy; winter&trade;'
  expect(c8b.conv8bitBuffer(b)).toBe(c)
})
