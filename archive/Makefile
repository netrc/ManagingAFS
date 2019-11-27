
FILES= CH00 \
	CH01 \
	CH02 \
	CH03 \
	CH04 \
	CH05 \
	CH06 \
	CH07 \
	CH08 \
	CH09 \
	CH10 \
	CH11 \
	CH12 \
	CH13 \
	CH14


MSFILES=$(addsuffix .ms, $(FILES))
PSFILES=$(addsuffix .ps, $(FILES))
TXTFILES=$(addsuffix .txt, $(FILES))

TROFF=troff -ms -Tpost
DPOST=/usr/lib/lp/postscript/dpost

all: book.ps

book.ps: toc.txt $(TXTFILES) t2troff
	t2troff toc.txt $(TXTFILES) | $(TROFF) | $(DPOST) > book.ps

psfiles: $(PSFILES)

$(PSFILES): %.ps: %.txt
	t2troff $< | $(TROFF) | $(DPOST) > $@

msfiles: $(MSFILES)

$(MSFILES): %.ms: %.txt
	t2troff $< > $@

book.txt: $(TXTFILES)
	cat $(TXTFILES) > book.txt

toc.txt: $(TXTFILES)
	tocMake $(TXTFILES) > toc.txt

co: $(TXTFILES)
	co -l $<

cleantxt:
	sed 's///' < preface.txt > @; mv @ preface.txt
	sed 's///' < 1overview.txt > @; mv @ 1overview.txt
	sed 's///' < 2technology.txt > @; mv @ 2technology.txt
	sed 's///' < 3cellsetup.txt > @; mv @ 3cellsetup.txt
	sed 's///' < 4volumes.txt > @; mv @ 4volumes.txt
	sed 's///' < 5clients.txt > @; mv @ 5clients.txt
	sed 's///' < 6usingafs.txt > @; mv @ 6usingafs.txt
	sed 's///' < 7archive.txt > @; mv @ 7archive.txt
	sed 's///' < 8moreadmin.txt > @; mv @ 8moreadmin.txt
	sed 's///' < 9debugging.txt > @; mv @ 9debugging.txt
	sed 's///' < 10project.txt> @; mv @ 10project.txt
