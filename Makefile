
CHAPTERS = CH00R.txt CH01R.txt CH02R.txt CH03R.txt CH04R.txt CH05R.txt CH06R.txt CH07R.txt CH08R.txt CH09R.txt CH10R.txt CH11R.txt CH12R.txt CH13R.txt CH14R.txt

ma.html: afs2pan archive/* newtables/* lib/*.js
	./afs2pan $(CHAPTERS) | pandoc -s --toc -c pandoc.css  --metadata pagetitle=ManagingAFS -t html -o ma.html

ma.docbook: afs2pan archive/* newtables/* lib/*.js
	./afs2pan $(CHAPTERS) | pandoc -s -t docbook -o ma.docbook

clean:
	rm ma.html
