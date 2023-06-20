def combination():
	nb_one = 0
	nb_two = nb_one + 1

	for first_nb in range(nb_one,99):
		nb_two = nb_one + 1
		for second_nb in range(nb_two, 100):
			print_numbers(first_nb, second_nb)
			nb_two += 1
			if first_nb != 98:
				print(", ", end="")
		nb_one += 1


def print_numbers(one, two):
	print("%02d %02d" % (one, two), end="")

combination()