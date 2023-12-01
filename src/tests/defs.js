/* -*- c -*- */

function test_panic (msg)
{
  System.stderr.writeln (test_name + ": fail: " + msg);
  System.stderr.flush ();
  System.exit (1);
}
