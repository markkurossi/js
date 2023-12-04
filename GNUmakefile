
all: build-all

TOP_SRCDIR = .
MODULES := src src/tests jsc/tests

ALL_TARGETS :=
CLEAN_TARGETS :=
TESTS :=
CFLAGS := -Wall -Wno-string-plus-int
DEFINES :=
INCLUDES := -I.


-include $(patsubst %,$(TOP_SRCDIR)/%/module.mk,$(MODULES))

build-all: $(ALL_TARGETS)

clean:
	rm -f $(CLEAN_TARGETS) $(ALL_TARGETS)

%.o : %.c
	$(CC) $(CFLAGS) $(DEFINES) $(INCLUDES) -c $< -o $@

check:
	for test in $(TESTS); do\
	  echo $$test; \
	  (cd `dirname $$test`; srcdir=. ./`basename $$test`); \
	done
