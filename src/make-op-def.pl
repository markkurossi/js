#!/usr/bin/env perl
#
# Opcode extractor.
#
# Copyright (c) 2023 Markku Rossi <mtr@iki.fi>
# Copyright (c) 1997-1998 New Generation Software (NGS) Oy
#
# Author: Markku Rossi <mtr@ngs.fi>
#

#
# This library is free software; you can redistribute it and/or
# modify it under the terms of the GNU Library General Public
# License as published by the Free Software Foundation; either
# version 2 of the License, or (at your option) any later version.
#
# This library is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
# Library General Public License for more details.
#
# You should have received a copy of the GNU Library General Public
# License along with this library; if not, write to the Free
# Software Foundation, Inc., 59 Temple Place - Suite 330, Boston,
# MA 02111-1307, USA
#
#
#
# $Source: /usr/local/cvsroot/ngs/js/src/make-op-def.pl,v $
# $Id: make-op-def.pl,v 1.1.1.1 1998/08/03 11:28:54 mtr Exp $
#

$opcount = 0;

print "# name               \topcode\tdatasize\n";
print "# ----------------------------------------\n";

while (<>) {
    if (/operand\s+([a-zA-Z_][a-zA-Z0-9_]*)\s+([\S]+)\s+\{/) {
	printf ("%-20s\t$opcount\t$2\n", $1);
    } else {
	next;
    }
    $opcount++;
}
