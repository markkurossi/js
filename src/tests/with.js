/* -*- c -*- */

test_name = "with-statement";

function Foo (value)
{
  this.value = value;
  this.hello = Foo$hello;
}

function Foo$hello ()
{
  return "Hello, world!";
}


function main ()
{
  var reference, val;

  /* Builtin. */

  reference = Math.PI;
  with (System)
    with (Math)
      val = PI;
  if (val != reference)
    test_panic ("built-in property");

  with (System)
    with (Math)
      with (File)
        val = byteToString (32);
  if (val != " ")
    test_panic ("built-in method");

  /* Object. */

  var o = new Foo (42);
  reference = o.value;
  with (o)
    val = value;
  if (val != reference)
    test_panic ("object property");

  with (o)
    val = hello ();
  if (val != "Hello, world!")
    test_panic ("object method");
}

main ();
