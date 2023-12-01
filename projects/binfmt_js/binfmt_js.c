/*
 *  linux/fs/binfmt_js.c
 *
 *  Copyright (C) 1998  Dmitry M. Golubovsky
 *  derived from binfmt_java.c
 *  FYI, the JS bytecode magic is 0xc0014a53
 *  JS is a free JavaScript standalone interpreter/compiler
 *  written by Markku Rossi.
 */

#include <linux/module.h>
#include <linux/string.h>
#include <linux/stat.h>
#include <linux/malloc.h>
#include <linux/binfmts.h>

#define _PATH_JS	"/usr/local/bin/js"

char binfmt_js_interpreter[65] = _PATH_JS;

static int do_load_bytecode(struct linux_binprm *bprm,struct pt_regs *regs)
{
	char *cp, *interp, *i_name;
	int retval;
	unsigned char *ucp = (unsigned char *) bprm->buf;
	if ((ucp[0] != 0xc0) || (ucp[1] != 0x01) || (ucp[2] != 0x4a) || (ucp[3] != 0x53)) 
		return -ENOEXEC;

	iput(bprm->inode);
	bprm->dont_iput=1;

	/*
	 * OK, we've set the interpreter name
	 * Splice in (1) the interpreter's name for argv[0] (_PATH_SH)
	 *           (2) the name of the js wrapper for argv[1] (_PATH_JS)
	 *           (3) filename of JS bytecode (replace argv[0])
	 *
	 * This is done in reverse order, because of how the
	 * user environment and arguments are stored.
	 */
	remove_arg_zero(bprm);
	i_name = bprm->filename;
	bprm->p = copy_strings(1, &i_name, bprm->page, bprm->p, 2);
	bprm->argc++;

	strcpy (bprm->buf, binfmt_js_interpreter);
	cp = bprm->buf;
	bprm->p = copy_strings(1, &cp, bprm->page, bprm->p, 2);
	bprm->argc++;

	interp = bprm->buf;
	if (!bprm->p) 
		return -E2BIG;
	/*
	 * OK, now restart the process with the interpreter's inode.
	 * Note that we use open_namei() as the name is now in kernel
	 * space, and we don't need to copy it.
	 */
	retval = open_namei(interp, 0, 0, &bprm->inode, NULL);
	if (retval)
		return retval;
	bprm->dont_iput=0;
	retval=prepare_binprm(bprm);
	if(retval<0)
		return retval;

	return search_binary_handler(bprm,regs);
}

static int load_bytecode(struct linux_binprm *bprm,struct pt_regs *regs)
{
	int retval;
	MOD_INC_USE_COUNT;
	retval = do_load_bytecode(bprm,regs);
	MOD_DEC_USE_COUNT;
	return retval;
}

struct linux_binfmt js_format = {
#ifndef MODULE
	NULL, 0, load_bytecode, NULL, NULL
#else
	NULL, &mod_use_count_, load_bytecode, NULL, NULL
#endif
};

int init_js_binfmt(void) {
	printk(KERN_INFO "JS Bytecode support v0.01 for Linux 2.0.x (C)1998 Dmitry M. Golubovsky\n");
	return register_binfmt(&js_format);
}

#ifdef MODULE
int init_module(void)
{
	return init_js_binfmt();
}

void cleanup_module( void) {
	printk(KERN_INFO "Removing JS Bytecode support...\n");
	unregister_binfmt(&js_format);
}
#endif
