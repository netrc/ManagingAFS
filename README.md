# ManagingAFS

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/) [![GitHub issues](https://img.shields.io/github/issues-raw/netrc/ManagingAFS)](https://github.com/netrc/ManagingAFS/issues)

Online edition of "Managing AFS: The Andrew File System" - See https://netrc.github.io/ManagingAFS

The archive/* files are the original text as delivered to publisher. See [notes/textnotes.html](notes/textnotes.html) for details on how the files are processed. 


## FINAL Proof
* no extra bold italic
* all 'code' in pre
* figures, tables labelled correctly
* html with css

## TODO
* make "figure", "table" captions bold
* tif figures
* or convert all to png?
* 0377 in Ch4; just before Client Administration
* 0245 - turn into list? '\n* ' ? (one more to control kerberos, put the server in a secure room
* 0216 - number of program clich*s
* 'text figures'
* figure h/w
* "untitled table"
* (1,2,3,4,5,6), 7A, 7B not indented
* extra spacing in 'fs getcacheparams'
* <dir needs to change
* figure 4-2 redo
* special case for CASE STUDY
* set pandoc options, like html title
* See https://pandoc.org/MANUAL.html#pandocs-markdown
* links
* ? what about other normal markup in my text? e.g. * 
* see CH01R.txt  - some <I> items; seem ok
* Footnote
```
  [[Footnote 1]]
  [[Footnote 1]] By the way, the SCO Corporation’s UNIX operating system, OpenServer, also has an AFS file system: this is the Acer© Fast File System and is a local disk file system only. Also, the Apple© Macintosh© file system and the Amiga File System are occasionally referred to as AFS. Don’t confuse these file systems with Transarc’s distributed file system.
```

## Done
* tables
* using pandoc.css - https://gist.github.com/killercup/5917178
* how to add css for better html style?
* pathnames in CH01 are not 'pre'. 
* what about my text lists "^--"  - convert to simple '*' ?
* Preface - Netware<U+0099> ; Chap 1 AIX<U+0099>
* better match of copyright/trademark; pandoc now supports &copy; &trade; correctly
* Tables - need to be hand done; added to meta table
* Figures - needs meta table? grab 1-1 and caption   lib/figData.js
* chapter - grab chapter # // not done; not how pandoc/docbook/etc work
* initCaps don't Afs in chapter/section, etc
* can't match \250 \252 in CH00R.txt file
* doesn't have title
* some meta information shows on first line
* 2019-09-28 - initial raw dump of final text

![Powered by Vim](https://www.vim.org/images/vim_created.gif)

