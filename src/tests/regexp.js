/* -*- c -*- */

test_name = "RegExp";

function main ()
{
  var re;

  /* Constructors. */

  re = new RegExp ("foo");
  if (re.toString () != "foo")
    test_panic ("new RegExp(PATTERN)");

  re = new RegExp ("foo", "gi");
  if (re.toString () != "foo")
    test_panic ("new RegExp(PATTERN, FLAGS)");

  /* Methods. */

  re = new RegExp ("d(b+)(d)", "ig");
  var a = re.exec ("cdbBdbsbz");
  if (a.toString () != "dbBd,bB,d")
    test_panic ("exec(STRING)");

  re.lastIndex = 0;
  RegExp.input = "cdbBdbsbz";
  a = re.exec ();
  if (a.toString () != "dbBd,bB,d")
    test_panic ("exec()");

  re = new RegExp ("a(b*)", "g");
  var str = "abbcdefabh";

  a = re.exec (str);
  if (a[0] != "abb")
    test_panic ("exec(STRING), global");
  if (re.lastIndex != 3)
    test_panic ("exec(STRING), global, lastIndex is out of sync");

  a = re.exec (str);
  if (a[0] != "ab")
    test_panic ("exec(STRING), global");
  if (re.lastIndex != 9)
    test_panic ("exec(STRING), global, lastIndex is out of sync");

  re = new RegExp ("fo*bar");
  if (!re.test ("fbar"))
    test_panic ("test(STRING): true");
  if (re.test ("fooBar"))
    test_panic ("test(STRING): false");

  re = new RegExp ("fo*bar", "i");
  if (!re.test ("FOObAR"))
    test_panic ("test(STRING), case insensitive");

  RegExp.input = "#include <stdio.h>";
  re = new RegExp ("^#");
  if (!re.test ())
    test_panic ("test()");

  /* Properties. */

  /* XXX $1-$9 */
  /* XXX $_, input */
  /* XXX lastMatch */
  /* XXX lastParen */
  /* XXX leftContext */
  /* XXX multiline */
  /* XXX rightContext */
  /* XXX global */
  /* XXX ignoreCase */
  /* XXX lastIndex */
  /* XXX source */

  /* Literals. */

  a = /d(b+)(d)/gi.exec ("cdbBdbsbz");
  if (a.toString () != "dbBd,bB,d")
    test_panic ("exec(STRING)");
}

main ();
