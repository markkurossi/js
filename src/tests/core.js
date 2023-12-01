/* -*- c -*- */

test_name = "global methods";

function main ()
{
  var v;

  /* callC() XXX */
  /* debug() XXX */

  /* float() */
  v = float (true);
  if (v != 1.0)
    test_panic ("float(true)");
  v = float (false);
  if (v != 0.0)
    test_panic ("float(false)");
  v = float ("3.14");
  if (v != 3.14)
    test_panic ("float(\"3.14\")");
  v = float (3.14);
  if (v != 3.14)
    test_panic ("float(3.14");
  v = float (new Array (1, 2, 3, 4));
  if (v != 4.0)
    test_panic ("float (new Array(...))");

  /* int() XXX */
  /* isNaN() XXX */
  /* isFloat() XXX */
  /* isInt() XXX */
  /* parseFloat() XXX */
  /* registerCFunction() XXX */
}

main ();
