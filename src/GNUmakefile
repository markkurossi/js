TOP_SRCDIR := ..
include $(TOP_SRCDIR)/mk/subdir.mk

.PHONY: compiler-source

compiler-source: make-data
	./make-data js_compiler_bytecode ../jsc/compiler.jsc compiler.c
