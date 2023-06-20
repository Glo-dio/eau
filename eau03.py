import sys

args = sys.argv

def fibonacci(index):
	if index == 0:
		return 0
	elif index == 1:
		return 1
	else:
		return (fibonacci(index - 1) + fibonacci(index - 2))

is_nb_arg_correct = True if len(args) == 2 else False

def is_args_valid():
	if is_nb_arg_correct == False:
		return False
	if args[1].isdigit() == False:
		return False


if is_args_valid() == False:
	print(-1)
else:
	print(fibonacci(int(args[1])))
