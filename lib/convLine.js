
const cvs = require('./convSymbols')
const fd = require('./figData')
const fs = require('fs')

const _keepUpper = {
  'AFS' : 1,
  'IBM' : 1,
  'ADSM' : 1,
  'PDC' : 1,
  'NFS-AFS' : 1,
  'AIX' : 1,
  'DCE' : 1,
  'DFS' : 1,
  'NT'  : 1
}

function _initCapWords( l ) {
  let words = l.split(' ')
  words = words.map( w => (w in _keepUpper) ? w : `${w[0]}${w.slice(1).toLowerCase()}` )
  return words.join(' ')
}

const matchFuncs = [
  { m: /PREFACE/, f: (l,cs) => {
    return { l: `\n# Preface`, cs: cs }
  }},

  // TODO: add chapter number
  { m: /CHAPTER /, f: (l, cs) => {
    let z = l.indexOf(':')
    let sname = _initCapWords( l.slice(z+2) )
    return { l: `# ${sname}`, cs: cs }
  }},

  { m: /SECTION:/, f: (l, cs) => {
    let sname = _initCapWords( l.slice(9) );
    return { l: `## ${cvs.convSymbols(sname)}`, cs: cs }
  }},

  { m: /PROGRAM/, f: (l, cs) => {
    ({ l, cs } = (cs != 'in program') ? { l:'<pre>', cs:'in program' } : { l:'</pre>', cs:'normal' })
    return { l: l, cs: cs }
  }},

  { m: /\[\[Figure 10/, f: (l, cs) => {   // note: all the Figure-10 figures are text screen captures
    let c = l.indexOf(':')
    let n = l.slice(2,c)
    let tdn = fd.tableData[n] || { f:null, h:0, w:0}
    let fname = `newtables/${tdn.f}`
    let tdata = tdn.f ? fs.readFileSync(fname) : `no such table for ${n}`
    let icaption = l.slice(2,l.length-2)
    icaption = cvs.convSymbols(icaption)  // there are ~~ code patterns in Fig10*
    return { l: `\n${tdata}\n<p>${icaption}</p>`, cs: cs }
  }},

  { m: /\[\[Figure [1]*[1-9]/, f: (l, cs) => {   // note: Figure 10 matches above
    let c = l.indexOf(':')
    let n = l.slice(2,c)
    let fdn = fd.figData[n] || { f:'not in fd', h:0, w:0}
    let fname = `../newfigs/${fdn.f}`
    let icaption = l.slice(2,l.length-2)
    return { l: `<img src="${fname}" alt="${icaption}" height="${fdn.h}" width="${fdn.w}"/> <p>${icaption}</p>`, cs: cs }
  }},

  { m: /\[\[[ ]*Table /, f: (l, cs) => {
    let c = l.indexOf(':')
    let n = l.slice(2,c)
    let tdn = fd.tableData[n] || { f:null, h:0, w:0}
    let fname = `newtables/${tdn.f}`
    let tdata = tdn.f ? fs.readFileSync(fname) : `no such table for ${n}`
    let icaption = l.slice(2,l.length-2)
    return { l: `\n${tdata}\n<p>${icaption}</p>`, cs: cs }
  }},

  { m: /.*/, f: (l, cs) => { // the guaranteed default match
    return { l: cvs.convSymbols(l), cs: cs }
  }}
]

const _convLine = ( l, cs ) => {
  const mf = matchFuncs.find( mf => l.match(mf.m) ) // guaranteed to find one match due to /.*/
  return mf.f(l, cs)   
}

module.exports = {
  convLine: _convLine
}
