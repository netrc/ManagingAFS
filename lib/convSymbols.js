
// convSymbols
// takes a string and converts any/all the 'these' strings to 'that' strings
// 'these' are the markup strings I used; 'that' are the html

const _convSymList = [
  { these: '~~', that: '' },
  { these: '~/~', that: '' },
  { these: '~B~', that: '<b>' },
  { these: '~/B~', that: '</b>' }
];

const _csConverter = (l, cs) => {
  return l.split(cs.these).join(cs.that)
}

module.exports = {
  convSymbols: l => _convSymList.reduce( _csConverter, l )
}
