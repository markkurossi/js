JSCOMPILER = ../src/js
JSCOMPILER_FLAGS = -Wpedantic -O2

JSS = defs.js lexer.js parser.js gram.js namespace.js streams.js	\
asm.js entry.js
JSCS = $(patsubst %.js,%.jsc,$(JSS))

EXTRA_DIST = $(JSS) $(JSCS) bs.js bs.jsc compiler.js compiler.jsc

compile: $(JSCS) bs.jsc

compiler: compiler.jsc

compiler.jsc: compiler.js
	$(JSCOMPILER) $(JSCOMPILER_FLAGS) -c $<
	mkdir -p bak
	cp compiler.jsc bak/compiler-`date | sed 's/ /-/g'`.jsc || true

compiler.js: $(JSS)
	cat $(JSS) >compiler.js

run: compile
	$(JSCOMPILER) --load $(JSCS) --file bs.jsc

wc:
	wc $(JSS)

maintainer-clean:
	rm -f $(JSCS) bs.jsc

SUFFIXES = .jsc .js

%.jsc : %.js
	$(JSCOMPILER) $(JSCOMPILER_FLAGS) -g -c $<
