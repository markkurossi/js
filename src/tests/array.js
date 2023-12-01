/* -*- c -*- */

test_name = "Array";

function by_number (a, b)
{
  return a - b;
}

function main ()
{
  var a, b;

  /* Constructors and the length property. */

  a = new Array (5);
  if (a.length != 5)
    test_panic ("new Array(LENGTH)");

  a = new Array (1, 2, 3, 4, 5);
  if (a.length != 5)
    test_panic ("new Array(ITEM...)");

  /* Methods. */

  /* concat() */
  a = new Array (1, 2, 3);
  b = a.concat (new Array (4, 5));
  if (b.length != 5)
    test_panic ("concat()");
  if (b.join () != "1,2,3,4,5")
    test_panic ("concat()");

  a = new Array (1, 2, 3);
  if (a.join () != "1,2,3")
    test_panic ("join()");
  if (a.join ("*") != "1*2*3")
    test_panic ("join(GLUE)");

  a = new Array (1, 2, 3);
  if (a.pop () != 3)
    test_panic ("pop()");
  if (a.pop () != 2)
    test_panic ("pop()");
  if (a.pop () != 1)
    test_panic ("pop()");
  if (typeof a.pop () != "undefined")
    test_panic ("pop()");

  a = new Array (1, 2);
  if (a.push (7) != 7)
    test_panic ("push(ITEM)");
  if (a.push (7, 8, 9) != 9)
    test_panic ("push(ITEM...)");

  a = new Array (1, 2, 3);
  a.reverse ();
  if (a.join ("") != "321")
    test_panic ("reverse()");

  a = new Array (1, 2, 3);
  if (a.shift () != 1)
    test_panic ("shift()");
  if (a.shift () != 2)
    test_panic ("shift()");
  if (a.shift () != 3)
    test_panic ("shift()");
  if (typeof a.shift() != "undefined")
    test_panic ("shift()");

  /* slice() */
  a = new Array (1, 2, 3, 4, 5);
  b = a.slice (1, 4);
  if (b.join ("") != "234")
    test_panic ("slice(START, END)");
  b = a.slice (1, -2);
  if (b.join ("") != "23")
    test_panic ("slice(START, -END)");
  b = a.slice (2);
  if (b.join ("") != "345")
    test_panic ("slice(START)");

  /* splice() */

  a = new Array (1, 2, 3);
  b = a.splice (1, 1);
  if (a.join ("") != "13")
    test_panic ("splice(POS, DEL)");
  if (b.join ("") != "2")
    test_panic ("splice(POS, DEL)");

  a = new Array (1, 2, 3);
  b = a.splice (1, 0, "new item");
  if (a.join ("") != "1new item23")
    test_panic ("splice(POS, 0, ITEM)");

  a = new Array (1, 2, 3, 4);
  b = a.splice (1, 2, "new item");
  if (a.join ("") != "1new item4")
    test_panic ("splice(POS, DEL, ITEM");
  if (b.join ("") != "23")
    test_panic ("splice(POS, DEL)");

  /* sort() */
  a = new Array ();
  {
    var i;
    for (i = 0; i < 50; i++)
      a.push (int (Math.random () * 100));

    /* Sort by number. */
    a.sort (by_number);

    var last = 0;
    for (i = 0; i < a.length; i++)
      {
	if (a[i] < last)
	  test_panic ("sort(by_number)");
	last = a[i];
      }

    /* Sort by lexical order. */
    a.sort ();
    last = "";
    for (i = 0; i < a.length; i++)
      {
	if (a[i].toString () < last)
	  test_panic ("sort()");
	last = a[i].toString ();
      }
  }

  a = new Array (1, 2, 3);
  if (a.toString() != "1,2,3")
    test_panic ("toString()");

  a = new Array (1, 2, 3);
  if (a.unshift (7, 8, 9) != 6)
    test_panic ("unshift()");
}

main ();
