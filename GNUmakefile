
all: build-all

include config.mk

TOP_SRCDIR = .
MODULES := src src/tests jsc/tests examples

ALL_TARGETS :=
CLEAN_TARGETS :=
TESTS :=
CFLAGS := -Wall -g -fPIC -DPIC
ifeq ($(shell uname),Darwin)
CFLAGS += -Wno-string-plus-int
endif
DEFINES :=
INCLUDES := -I. -Isrc
LDFLAGS := -Lsrc -g
SO_LDFLAGS := $(LDFLAGS) -shared

-include $(patsubst %,$(TOP_SRCDIR)/%/module.mk,$(MODULES))

build-all: $(ALL_TARGETS)

clean:
	rm -f $(CLEAN_TARGETS) $(ALL_TARGETS)

%.o : %.c
	$(CC) $(CFLAGS) $(DEFINES) $(INCLUDES) -c $< -o $@

check:
	@for test in $(TESTS); do\
	  echo $$test; \
	  (cd `dirname $$test`; srcdir=. ./`basename $$test`); \
	done
