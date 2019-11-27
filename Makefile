

ma.html: afs2pan archive/*
	./afs2pan CH00R.txt CH01R.txt | pandoc -s --metadata pagetitle=ManagingAFS -t html -o ma.html

clean:
	rm ma.html
