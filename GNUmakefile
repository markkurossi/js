
all: build-all

TOP_SRCDIR = .
MODULES := src

ALL_TARGETS :=
DEFINES := -DHAVE_CONFIG_H -DHAVE_STDC_HEADERS
INCLUDES := -I.


-include $(patsubst %,$(TOP_SRCDIR)/%/module.mk,$(MODULES))

build-all: $(ALL_TARGETS)

%.o : %.c
	$(CC) -Wall $(DEFINES) $(INCLUDES) -c -o $@ $<
