
const cvs = require('./convSymbols')

function _initCapWords( l ) {
  let words = l.split(' ');
  words = words.map( w => `${w[0]}${w.slice(1).toLowerCase()}` );
  return words.join(' ');
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
    return { l: `## ${sname}`, cs: cs }
  }},

  { m: /PROGRAM/, f: (l, cs) => {
    ({ l, cs } = (cs != 'in program') ? { l:'<pre>', cs:'in program' } : { l:'</pre>', cs:'normal' })
    return { l: l, cs: cs }
  }},

  { m: /\[\[Figure /, f: (l, cs) => {
    let iname = "newfigs/fig1.jpg"  // maybe use a table to convert figure # to file name?
    let icaption = "Figure 1-1: The AFS Architecture"
    return { l: `<img src="${iname}" alt="${icaption}" height="458" width="638"/> <p>${icaption}</p>`, cs: cs }
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
