
const chr_tm = 0o252
const buf_tm = Buffer.from( '&#153;' )    // trademark
const chr_cp = 0o250
const buf_cp = Buffer.from( '&#169;' )    // copyright

const _conv8bitBuffer = d => {
  let buf2 = Buffer.alloc(d.length + 500)
  let i = j = 0

  for (i = 0; i < d.length; i++) {
    if (d[i] == chr_tm) { //console.log(`tm found at ${i}`)
      buf_tm.copy(buf2,j)          // buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]])
      j += buf_tm.length
    } else if (d[i] == chr_cp) { //console.log(`cp found at ${i}`)
      buf_cp.copy(buf2,j)          // buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]])
      j += buf_cp.length
    } else {
      buf2[j] = d[i]
      j += 1
    }
  }
  return buf2.subarray(0,j).toString()
}

module.exports = {
  conv8bitBuffer: _conv8bitBuffer
}
