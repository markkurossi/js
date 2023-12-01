/* -*- c -*- */

test_name = "object";

/*
 * Create some classes.  This example is the one that can be found from
 * the document "Object Hierarchy and Inheritance in JavaScript":
 * http://developer.netscape.com/docs/manuals/communicator/jsobj/jsobj.pdf
 */

function Employee (name, dept)
{
  this.name = name || "";
  this.dept = dept || "general";
}

function Manager ()
{
  this.reports = new Array ();
}
Manager.prototype = new Employee;

function WorkerBee (name, dept, projs)
{
  this.base = Employee;
  this.base (name, dept);
  this.projects = projs || new Array ();
}
WorkerBee.prototype = new Employee;

function SalesPerson ()
{
  this.dept = "sales";
  this.quota = 100;
}
SalesPerson.prototype = new WorkerBee;

function Engineer (name, projs, mach)
{
  this.base = WorkerBee;
  this.base (name, "engineering", projs);
  this.machine = mach || "";
}
Engineer.prototype = new WorkerBee;

function instanceOf (object, constructor)
{
  while (object != null)
    {
      if (object == constructor.prototype)
	return true;
      object = object.__proto__;
    }
  return false;
}


function main ()
{
  /* The jane example. */

  var jane = new Engineer ("Doe, Jane", new Array ("navigator", "javascript"),
			   "belau");
  if (jane.machine != "belau")
    test_panic ("jane.machine");
  if (jane.projects.toString () != "navigator,javascript")
    test_panic ("jane.projects");
  if (jane.name != "Doe, Jane")
    test_panic ("jane.name");
  if (jane.dept != "engineering")
    test_panic ("jane.depth");

  /* The instanceOf() example. */

  if (!instanceOf (jane, Engineer))
    test_panic ("instanceOf(jane, Engineer)");
  if (!instanceOf (jane, WorkerBee))
    test_panic ("instanceOf(jane, WorkerBee)");
  if (!instanceOf (jane, Employee))
    test_panic ("instanceOf(jane, Employee)");
  if (!instanceOf (jane, Object))
    test_panic ("instanceOf(jane, Object)");

  /* The explicit __proto__ chain. */

  if (jane.__proto__ != Engineer.prototype)
    test_panic ("jane.__proto__ != Engineer.prototype");
  if (jane.__proto__.__proto__ != WorkerBee.prototype)
    test_panic ("jane.__proto__.__proto__ != WorkerBee.prototype");
  if (jane.__proto__.__proto__.__proto__ != Employee.prototype)
    test_panic ("jane.__proto__.__proto__.__proto__ != Employee.prototype");
  if (jane.__proto__.__proto__.__proto__.__proto__ != Object.prototype)
    test_panic ("jane.__proto__.__proto__.__proto__.__proto__ != Object.prototype");
  if (jane.__proto__.__proto__.__proto__.__proto__.__proto__ != null)
    test_panic ("jane.__proto__.__proto__.__proto__.__proto__.__proto__ != null");
}

main ();
