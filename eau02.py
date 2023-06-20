import sys

arguments = sys.argv
len_args = len(arguments) - 1


def reverse_args():
	for parameters in range(len_args, 0, -1):
		print(arguments[parameters])

is_args_are_correct = True if len_args > 0 else False

if is_args_are_correct == False:
	print("error.")
else:
	reverse_args()

