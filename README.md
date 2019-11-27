# ManagingAFS

Text of "Managine AFS: The Andrew File System"

* input format is my 1997 version of markdown
* working on script to convert original files (archive/*) to true markdown
* ... then use 'pandoc' to convert to html, docbook, etc

```
$ ./afs2pan | pandoc -s --metadata pagetitle=ManagingAFS -t html -o index.html

$ afs2pan | pandoc -s -t docbook -o x.docbook
```

## TODO
* don't Afs in chapter/section, etc
* pathnames in CH01 are not 'pre'. 
* how to add css for better html style?
* Figures
```
  [[Figure 1-1: The AFS Architecture]]
```
* Table
```
  [[Table 1-1: A Selection of Publicly Accessible AFS Cells]]</p>
  [[Table 1-2: Supported Hardware/OS Ports of AFS]]</p>
```
* Footnote
```
  [[Footnote 1]]
  [[Footnote 1]] By the way, the SCO Corporation’s UNIX operating system, OpenServer, also has an AFS file system: this is the Acer© Fast File System and is a local disk file system only. Also, the Apple© Macintosh© file system and the Amiga File System are occasionally referred to as AFS. Don’t confuse these file systems with Transarc’s distributed file system.
```


## Done
* can't match \250 \252 in CH00R.txt file
* doesn't have title
* some meta information shows on first line


2019-90-28 - initial raw dump of final text
