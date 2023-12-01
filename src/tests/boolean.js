/* -*- c -*- */

test_name = "Boolean";

function Foo ()
{
}

function main ()
{
  var b;
  var f = new Foo ();

  /* Constructors. */

  b = new Boolean (f.cant_be_found);
  if (b)
    test_fail ("new Boolean(undefined)");

  b = new Boolean (null);
  if (b)
    test_fail ("new Boolean(null)");

  b = new Boolean (false);
  if (b)
    test_fail ("new Boolean(false)");
  b = new Boolean (true);
  if (!b)
    test_fail ("new Boolean(true)");

  b = new Boolean ("");
  if (b)
    test_fail ("new Boolean(\"\")");
  b = new Boolean ("foo");
  if (!b)
    test_fail ("new Boolean(\"foo\")");

  b = new Boolean (0);
  if (b)
    test_fail ("new Boolean(0)");
  b = new Boolean (1);
  if (!b)
    test_fail ("new Boolean(1)");

  /* Methods. */

  if (true.toString() != "true")
    test_fail ("true.toString()");
  if (false.toString() != "false")
    test_fail ("false.toString()");
}

main ();
