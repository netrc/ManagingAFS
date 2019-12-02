
// convSymbols
// takes a string and converts any/all the 'these' strings to 'that' strings
// 'these' are the markup strings I used; 'that' are the html

const _convSymList = [
  { these: '~~\\~/~', that: '<code>\\\\</code>' },    
  { these: '~~/~', that: '</code>' },    // this was actually a typo
  { these: 'too many errors~~', that: 'too many errors</code>' },    // another typo
  { these: '-p~/`', that: '-p</code>' },    // another typo
  { these: '~~etc~ ', that: '<code>etc</code> ' },    // another typo
  { these: '~~', that: '<code>' },
  { these: '~/~', that: '</code>' },
  { these: '~?~', that: '</code>' },    // another typo
  { these: '~B~', that: '<b>' },
  { these: '~/B~', that: '</b>' },
  { these: /^-- /, that: '* ' }
];

const _csConverter = (l, cs) => {
  return l.split(cs.these).join(cs.that)
}

module.exports = {
  convSymbols: l => _convSymList.reduce( _csConverter, l )
}
