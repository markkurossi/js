/* -*- c -*- */

test_name = "String";

function main ()
{
  var s;

  /* Constructor and the length property. */
  s = new String ("foo");
  if (s.length != 3)
    test_panic ("new String(STRING)");
  if (s != "foo")
    test_panic ("new String(STRING)");

  /* Methods. */

  s.append ("bar");
  if (s != "foobar")
    test_panic ("append()");

  if (s.charAt (3) != "b")
    test_panic ("charAt()");
  if ("foobar".charAt (3) != "b")
    test_panic ("charAt()");

  if (s.charCodeAt (5) != #'r')
    test_panic ("charCodeAt()");
  if ("foobar".charCodeAt (5) != #'r')
    test_panic ("charCodeAt()");

  if (s.concat ("FOO") != "foobarFOO")
    test_panic ("concat()");
  if ("foobar".concat ("FOO") != "foobarFOO")
    test_panic ("concat()");

  if (String.fromCharCode (#'f', #'o', #'o', #'b', #'a', #'r') != "foobar")
    test_panic ("fromCharCode()");

  s = "foobar foo bar foo";
  if (s.indexOf ("foo") != 0)
    test_panic ("indexOf()");
  if (s.indexOf (" foo") != 6)
    test_panic ("indexOf()");
  if (s.indexOf ("foo", 1) != 7)
    test_panic ("indexOf()");
  if (s.indexOf ("Foo") != -1)
    test_panic ("indexOf()");

  s = "foobar foo bar foo";
  if (s.lastIndexOf ("foo") != 15)
    test_panic ("lastIndexOf(1)");
  if (s.lastIndexOf ("bar") != 11)
    test_panic ("lastIndexOf(2)");
  if (s.lastIndexOf ("foo", 14) != 7)
    test_panic ("lastIndexOf(3)");
  if (s.lastIndexOf ("Foo") != -1)
    test_panic ("lastIndexOf(4)");

  /* match() XXX */
  /* pack() XXX */
  /* replace() XXX */
  /* search() XXX */

  s = "Hello, world!";
  if (s.slice (7) != "world!")
    test_panic ("slice(START)");
  if (s.slice (-5) != "orld!")
    test_panic ("slice(-START)");
  if (s.slice (-500) != s)
    test_panic ("slice(-START)");
  if (s.slice (500) != "")
    test_panic ("slice(START)");
  if (s.slice (7, 9) != "wo")
    test_panic ("slice(START, END)");
  if (s.slice (7, -2) != "worl")
    test_panic ("slice(START, -END)");
  if (s.slice (7, -20) != "")
    test_panic ("slice(START, -END)");
  if (s.slice (7, 200) != "world!")
    test_panic ("slice(START, END)");
  if (s.slice (700, 200) != "")
    test_panic ("slice(START, END)");

  /* split() XXX */

  s = "Hello, world!";
  if (s.substr (7) != "world!")
    test_panic ("substr(START)");
  if (s.substr (7, 4) != "worl")
    test_panic ("substr(START, LEN)");
  if (s.substr (7, 400) != "world!")
    test_panic ("substr(START, LEN)");
  if (s.substr (-6) != "world!")
    test_panic ("substr(-START)");
  if (s.substr (-6, 4) != "worl")
    test_panic ("substr(-START, LEN)");
  if (s.substr (-600, 5) != "Hello")
    test_panic ("substr(-START, LEN)");

  /* substring() XXX */

  s = "FoObAr";
  if (s.toLowerCase () != "foobar")
    test_panic ("toLowerCase()");
  if (s.toUpperCase () != "FOOBAR")
    test_panic ("toUpperCase()");

  /* unpack() XXX */
}

main ();
