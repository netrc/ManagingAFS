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
* Preface - Netware<U+0099> ; Chap 1 AIX<U+0099>
* set pandoc options, like html title
* pathnames in CH01 are not 'pre'. 
* how to add css for better html style?
* See https://pandoc.org/MANUAL.html#pandocs-markdown
* what about my text lists "^--"  - convert to simple '*' ?
* links
* ? what about other normal markup in my text? e.g. * 
* see CH01R.txt  - some <I> items; seem ok
* Footnote
```
  [[Footnote 1]]
  [[Footnote 1]] By the way, the SCO Corporation’s UNIX operating system, OpenServer, also has an AFS file system: this is the Acer© Fast File System and is a local disk file system only. Also, the Apple© Macintosh© file system and the Amiga File System are occasionally referred to as AFS. Don’t confuse these file systems with Transarc’s distributed file system.
```


## Done
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
