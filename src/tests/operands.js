/* -*- c -*- */

test_name = "byte-code operands";

/*
 * Check items <a> and <b> for equality.  They should be equal, so if
 * == returns false or != returns true, that's an error.
 */
function cmp_eq (a, b)
{
  if (!(a == b))
    test_panic ("`cmp_eq " + typeof a + " " + typeof b + "' returns false");
  if (a != b)
    test_panic ("`cmp_ne " + typeof a + " " + typeof b + "' returns true");
}

/* Check items <a> and <b> for strict equality. */
function cmp_seq (a, b)
{
  if (!(a === b))
    test_panic ("`cmp_seq " + typeof a + " " + typeof b + "' returns false");
  if (a !== b)
    test_panic ("`cmp_sne " + typeof a + " " + typeof b + "' returns true");
}

function returnHello ()
{
  return "Hello, world!";
}

function returnTheMeaning ()
{
  return 42;
}

function main ()
{
  /* cmp_{eq,ne} */
  cmp_eq (null, null);
  cmp_eq (null, new Object ().foo);
  cmp_eq (new Object ().foo, new Object ().bar);
  cmp_eq (1, 1);
  cmp_eq (1.0, 1);
  cmp_eq (1, 1.0);
  cmp_eq (0, -0);
  cmp_eq (-0, 0);
  cmp_eq (-0, -0);
  cmp_eq ("foo", "foo");
  cmp_eq (true, true);
  cmp_eq (false, false);

  var a = new Object ();
  cmp_eq (a, a);
  cmp_eq (Object, Object);
  cmp_eq (main, main);

  cmp_eq (1, "1");
  cmp_eq ("1", 1);
  cmp_eq (1, "1.0");
  cmp_eq ("1.0", 1.0);

  cmp_eq (true, 1);
  cmp_eq (false, 0);

  var o = new Object ();
  o.valueOf = returnHello;
  cmp_eq (o, "Hello, world!");
  cmp_eq ("Hello, world!", o);

  o.valueOf = returnTheMeaning;
  cmp_eq (o, 42);
  cmp_eq (42, o);

  /* cmp_{seq,sne} */
  cmp_seq (1, 1);
  cmp_seq (1.0, 1);
  cmp_seq (1, 1.0);
  cmp_seq ("foobar", "foobar");
  cmp_seq (true, true);
  cmp_seq (false, false);
  cmp_seq (a, a);
  cmp_seq (Object, Object);
  cmp_seq (main, main);

  /* div */
  if (!isNaN (NaN / 1) || !isNaN (1 / NaN) || !isNaN (NaN / NaN))
    test_panic ("NaN in `div' didn't gave NaN");
  if (!isNaN (Infinity / Infinity))
    test_panic ("`div Infinity Infinity' didn't gave NaN");
  if (isFinite (Infinity / 0))
    test_panic ("`div Infinity 0' didn't gave Infinity");
  if (42 / Infinity != 0)
    test_panic ("`div nonzero Infinity1 didn't gave 0");
  if (!isNaN (0 / 0))
    test_panic ("`div 0 0' didn't gave NaN");
  if (isFinite (42 / 0))
    test_panic ("`div nonzero 0' didn't gave Infinity");

  /* mod */
  if (!isNaN (NaN % 0) || !isNaN (NaN % NaN) || !isNaN (NaN % Infinity))
    test_panic ("NaN in `mod' didn't gave NaN");
  if (!isNaN (Infinity % 7) || !isNaN (-Infinity % 2))
    test_panic ("Infinity in dividend of `mod' didn't gave NaN");
  if (!isNaN (42 % 0))
    test_panic ("0 in divisor of `mod' didn't gave NaN");
  if (42 % Infinity != 42 || 42.2 % Infinity != 42.2)
    test_panic ("finite % Infinity didn't gave finite");
  if (0 % 42.0 != 0 || 0.0 % 42 != 0.0)
    test_panic ("finite % Infinity didn't gave finite");
  if (42 % 7 != 0)
    test_panic ("positive % positive didn't work");
  if (41 % 7 != 6)
    test_panic ("positive % positive didn't work");
  if (-41 % 7 != -6)
    test_panic ("negative % positive didn't work");
  if (-4.2 % 7 != -4.2)
    test_panic ("negative % positive didn't work");
}

main ();
