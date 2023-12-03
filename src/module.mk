ALL_TARGETS += src/js src/libjs.a

libjs_SOURCES := src/bc.c src/heap.c src/object.c src/debug.c		\
		src/compiler.c src/js.c src/vm.c src/vmswitch.c		\
		src/vmjumps.c src/alloc.c src/utils.c src/mrgsort.c	\
		src/regex.c src/crc32.c src/iostream.c src/b_array.c	\
		src/b_bool.c src/b_func.c src/b_core.c src/b_number.c	\
		src/b_object.c src/b_string.c src/b_date.c		\
		src/b_dir.c src/b_file.c src/b_math.c src/b_regexp.c	\
		src/b_system.c src/b_vm.c src/vmswt0.c src/r_std.c	\
		src/r_pthrs.c src/dl_open.c src/xjs.c src/xcurses.c	\
		src/xmd5.c src/md5c.c

libjs_OBJS := $(patsubst %.c,%.o,$(libjs_SOURCES))
INCLUDES += -Isrc

src/libjs.a: $(libjs_OBJS)
	@rm -f $@
	ar cr $@ $+

src/js: src/main.c src/getopt.c src/getopt1.c src/libjs.a
	$(CC) $(DEFINES) $(INCLUDES) -o $@ $+ -ldl