
all: build-all

TOP_SRCDIR = .
MODULES := src

ALL_TARGETS :=
CLEAN_TARGETS :=
DEFINES := -DHAVE_CONFIG_H
INCLUDES := -I.


-include $(patsubst %,$(TOP_SRCDIR)/%/module.mk,$(MODULES))

build-all: $(ALL_TARGETS)

clean:
	rm -f $(CLEAN_TARGETS) $(ALL_TARGETS)

%.o : %.c
	$(CC) -Wall $(DEFINES) $(INCLUDES) -c -o $@ $<
