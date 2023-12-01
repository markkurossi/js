/* -*- c -*- */

test_name = "misc";

function stack_overflow_without_locals ()
{
  stack_overflow_without_locals ();
}

function stack_overflow_with_locals ()
{
  var a = 1, b = 2, c = 3, d = 4, e = 5, f = 6, g = 7, h = 8,
    i = 9, j = 10, k = 11, l = 12, m = 13, n = 14, o = 15, p = 16,
    q = 17, r = 18, s = 19;

  stack_overflow_with_locals ();
}

function main ()
{
  /*
   * Stack overflow detection in the `jsr' operand.  If this test
   * fails, we will crash with a core dump.
   */
  try
    {
      stack_overflow_without_locals ();
    }
  catch (e)
    {
      // System.stderr.writeln (e);
    }

  /* Stack overflow detection in the `locals' operand. */
  try
    {
      stack_overflow_with_locals ();
    }
  catch (e)
    {
      // System.stderr.writeln (e);
    }
}

main ();
