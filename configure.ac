dnl Process this file with autoconf to produce a configure script.

AC_PREREQ(2.69)

AC_INIT(src/jsint.h)
AC_CONFIG_HEADERS([jsconfig.h])

AC_PROG_INSTALL
AC_PROG_RANLIB
AC_PROG_CC

AC_CHECK_SIZEOF(int)
AC_CHECK_SIZEOF(long)

AC_FUNC_ALLOCA
AC_STDC_HEADERS
AC_HAVE_HEADERS(string.h stdlib.h unistd.h errno.h float.h limits.h)

AC_CHECK_FUNCS(srand48 drand48 sleep usleep lstat)

AC_CANONICAL_HOST
AC_DEFINE_UNQUOTED(CANONICAL_HOST, "$host")
AC_DEFINE_UNQUOTED(CANONICAL_HOST_CPU, "$host_cpu")
AC_DEFINE_UNQUOTED(CANONICAL_HOST_VENDOR, "$host_vendor")
AC_DEFINE_UNQUOTED(CANONICAL_HOST_OS, "$host_os")

dnl Does the struct stat have st_blksize?
AC_MSG_CHECKING([if struct stat has st_blksize])
AC_TRY_COMPILE([
#include <sys/stat.h>
#include <sys/types.h>
], [
  struct stat stat_st;
  stat_st.st_blksize = 0;
], [
  AC_MSG_RESULT(yes)
  AC_DEFINE(HAVE_STAT_ST_ST_BLKSIZE, 1)
], [
  AC_MSG_RESULT(no)
])

dnl Does the struct stat have st_blocks?
AC_MSG_CHECKING([if struct stat has st_blocks])
AC_TRY_COMPILE([
#include <sys/stat.h>
#include <sys/types.h>
], [
  struct stat stat_st;
  stat_st.st_blocks = 0;
], [
  AC_MSG_RESULT(yes)
  AC_DEFINE(HAVE_STAT_ST_ST_BLOCKS, 1)
], [
  AC_MSG_RESULT(no)
])

dnl
dnl Interpreter features.
dnl

AC_ARG_ENABLE(all-dispatchers,
[  --enable-all-dispatchers  build all byte-code instruction dispatchers],
  if test "X$enableval" = "Xyes"; then
    echo "building all byte-code instruction dispatchers"
    AC_DEFINE(ALL_DISPATCHERS)
    INTERPRETER_FEATURES="$INTERPRETER_FEATURES vmswt0.lo"
  fi
)

AC_ARG_ENABLE(profiling,
[  --enable-profiling      enable byte-code operand profiling],
  if test "X$enableval" = "Xyes"; then
    echo "enabling byte-code operand profiling"
    AC_DEFINE(PROFILING)
  fi
)

AC_ARG_ENABLE(operand-hooks,
[  --enable-operand-hooks  turn on byte-code operand hooks],
  if test "X$enableval" = "Xyes"; then
    echo "enabling byte-code operand hooks"
    AC_DEFINE(BC_OPERAND_HOOKS)
  fi
)

AC_ARG_ENABLE(jumps,
[  --disable-jumps         disable the jumps instruction dispatch method],
  if test "X$enableval" = "Xno"; then
    echo "disabling the jumps byte-code instruction dispatch method"
    AC_DEFINE(DISABLE_JUMPS)
  fi
)

AC_OUTPUT([config.mk])
