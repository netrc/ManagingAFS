# ManagingAFS

Text of "Managine AFS: The Andrew File System"

* input format is my 1997 version of markdown
* working on script to convert original files (archive/*) to true markdown
* ... then use 'pandoc' to convert to html, docbook, etc

```
$ ./afs2pan | pandoc -s --metadata pagetitle=ManagingAFS -t html -o index.html

$ afs2pan | pandoc -s -t docbook -o x.docbook
```

## FINAL Proof
* no extra bold italic
* all 'code' in pre
* figures, tables labelled correctly
* html with css

## TODO
* tables
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


2019-90-28 - initial raw dump of final text
? new repo name?
