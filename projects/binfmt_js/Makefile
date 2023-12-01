all: binfmt_js.o

CFLAGS = -Wall -Wstrict-prototypes -O2 -fomit-frame-pointer -fno-strength-reduce

binfmt_js.o : binfmt_js.c
	gcc $(CFLAGS) -c -DMODULE -D__KERNEL__ -o $@ $<

