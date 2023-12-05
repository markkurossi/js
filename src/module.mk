ALL_TARGETS += src/js src/libjs.a src/make-data

libjs_SOURCES := src/bc.c src/heap.c src/object.c src/debug.c		\
src/compiler.c src/js.c src/vm.c src/vmswitch.c src/vmjumps.c		\
src/alloc.c src/utils.c src/mrgsort.c src/regex.c src/crc32.c		\
src/iostream.c src/b_array.c src/b_bool.c src/b_func.c src/b_core.c	\
src/b_number.c src/b_object.c src/b_string.c src/b_date.c src/b_dir.c	\
src/b_file.c src/b_math.c src/b_regexp.c src/b_system.c src/b_vm.c	\
src/vmswt0.c src/r_std.c src/r_pthrs.c src/dl_open.c src/xjs.c		\
src/xmd5.c src/md5c.c

# src/xcurses.c

libjs_HEADERS := src/ansidecl.h src/c2jumps.h src/eswt0.h src/md5.h	\
src/c1jumps.h src/c2switch.h src/getopt.h src/mrgsort.h			\
src/c1switch.h src/ejumps.h src/js.h src/regex.h src/c1swt0.h		\
src/eswitch.h src/jsint.h src/rentrant.h

libjs_OBJS := $(patsubst %.c,%.o,$(libjs_SOURCES))

CLEAN_TARGETS += $(libjs_OBJS)

src/libjs.a: $(libjs_OBJS)
	@rm -f $@
	ar cr $@ $+

CLEAN_TARGETS += src/main.o src/getopt.o src/getopt1.o src/make-data.o

src/js: src/main.o src/getopt.o src/getopt1.o src/libjs.a
	$(CC) $(DEFINES) $(INCLUDES) $(CFLAGS) $(LDFLAGS) -o $@ $+ -ldl -lm

src/make-data: src/make-data.o
	$(CC) $(DEFINES) $(INCLUDES) $(CFLAGS) $(LDFLAGS) -o $@ $+
