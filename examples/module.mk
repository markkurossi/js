ALL_TARGETS += examples/simple examples/ieval

examples/simple: examples/simple.c
	$(CC) $(DEFINES) $(INCLUDES) $(CFLAGS) $(LDFLAGS) -o $@ $+ -ljs

examples/ieval: examples/ieval.c
	$(CC) $(DEFINES) $(INCLUDES) $(CFLAGS) $(LDFLAGS) -o $@ $+ -ljs
