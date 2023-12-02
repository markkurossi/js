# NGS JavaScript Interpreter

Welcome to the NGS JavaScript interpreter. The NGS JavaScript is a GPL
free interpreter for the JavaScript language. The original
implementation dates from the 90s when JavaScript was only used in the
Netscape Web browser. Fast forward 20 years, and the latest edits
update the build environment to support modern operating systems.

The NGS JavaScript interpreter is free software; you can redistribute
it and/or modify it under the terms of the GNU Library General Public
License as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This library is distributed in the hope that it will be useful, but
WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
Library General Public License for more details.

You should have received a copy of the GNU Library General Public
License along with this library; if not, write to the Free Software
Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA 02111-1307,
USA

## Design Goals

This implementation is not 100% compatible with the JavaScript
language found in Netscape's WWW browsers and servers.  To
achieve the following design goals, some shortcuts have been taken in
the implementation compared to Netscape's implementation.

This implementation is designed to be:

 - re-entrant: the interpreter can be safely used in multi-threaded
   environments

 - extendible: the interpreter API allows user-defined commands and
   classes, and it allows reading and setting language's global
   variables

 - fast: the JavaScript code is compiled to byte-code that is executed
   by a virtual machine

 - programmable: it should be easy to implement large projects with
   the language

## WWW Home Page and Additional Information

The WWW home page of the NGS JavaScript interpreter is at
[Github](https://github.com/markkurossi/js).

Please note that the current version is a work in progress.  It
contains bugs, and many features still need to be implemented.

Comments, suggestions, bug reports and fixes, feature wishes, etc. are
welcome.

Markku Rossi <mtr@iki.fi>
