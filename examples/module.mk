ALL_TARGETS += examples/simple examples/ieval examples/dload.so

examples/simple: examples/simple.c
	$(CC) $(DEFINES) $(INCLUDES) $(CFLAGS) $(LDFLAGS) -o $@ $+ -ljs -lm -ldl

examples/ieval: examples/ieval.c
	$(CC) $(DEFINES) $(INCLUDES) $(CFLAGS) $(LDFLAGS) -o $@ $+ -ljs -lm -ldl

examples/dload.so: examples/dload.c
	$(CC) $(DEFINES) $(INCLUDES) $(CFLAGS) $(SO_LDFLAGS) -o $@ $+ -ljs -lm -ldl
