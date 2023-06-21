import sys

args = sys.argv

def nb_premier(nb):
	i = 2
	if nb <= 1:
		return -1
	else:
		while i < nb:
			if nb % i == 0:
				return 0
			i += 1
	return 1

def next_nb_premier(nb):
	if nb_premier(nb) == 1:
		return nb
	nb += 1
	while nb_premier(nb) == 0:
		nb += 1
	return nb

is_nb_arg_correct = True if len(args) == 2 else False

def is_args_valid():
	if is_nb_arg_correct == False:
		return False
	if args[1].isdigit() == False:
		return False


if is_args_valid() == False:
	print(-1)
else:
	print(next_nb_premier(int(args[1])))
