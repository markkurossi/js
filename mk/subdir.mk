phony_targets := all clean check

.PHONY: $(phony_targets)

$(phony_targets) :
	@echo "Entering directory \`$(TOP_SRCDIR)'"
	@$(MAKE) subdir="$(CURDIR)" -C "$(TOP_SRCDIR)" $@
