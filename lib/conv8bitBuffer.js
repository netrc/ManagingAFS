
const _chr_tm = 0o252
const _buf_tm = Buffer.from( '&trade;' )    // trademark
const _chr_cp = 0o250
const _buf_cp = Buffer.from( '&copy;' )    // copyright

const _conv8bitBuffer = d => {
  let buf2 = Buffer.alloc(d.length + 500)
  let i = j = 0

  for (i = 0; i < d.length; i++) {
    if (d[i] == _chr_tm) { //console.log(`tm found at ${i}`)
      _buf_tm.copy(buf2,j)          // buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]])
      j += _buf_tm.length
    } else if (d[i] == _chr_cp) { //console.log(`cp found at ${i}`)
      _buf_cp.copy(buf2,j)          // buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]])
      j += _buf_cp.length
    } else {
      buf2[j] = d[i]
      j += 1
    }
  }
  return buf2.subarray(0,j).toString()
}

module.exports = {
  conv8bitBuffer: _conv8bitBuffer,
  chr_tm: _chr_tm,
  chr_cp: _chr_cp
}
