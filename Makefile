

ma.html: afs2pan archive/*
	./afs2pan CH00R.txt CH01R.txt CH02R.txt | pandoc -s --metadata pagetitle=ManagingAFS -t html -o ma.html

ma.docbook: afs2pan archive/*
	./afs2pan CH00R.txt CH01R.txt | pandoc -s -t docbook -o ma.docbook

clean:
	rm ma.html
