TOP_SRCDIR := ..
include $(TOP_SRCDIR)/mk/subdir.mk

.PHONY: operands compiler-source

operands:
	./make-op-def.pl operands.def > op.def
	./make-swt0.pl operands.def
	./make-switch.pl operands.def
	./make-jumps.pl operands.def

compiler-source: make-data
	./make-data js_compiler_bytecode ../jsc/compiler.jsc compiler.c
