def combination():
	nb_one = 0
	nb_two = nb_one + 1
	nb_three = nb_two + 1

	for first_nb in range(nb_one, 8):
		nb_two = nb_one + 1
		for second_nb in range(nb_two, 9):
			nb_three = nb_two + 1
			for thrird_nb in range(nb_three, 10):
				print_numbers(first_nb, second_nb, thrird_nb)
				nb_three += 1
				if nb_one != 7:
					print(", ",end="")
			nb_two += 1
		nb_one += 1

def print_numbers(one, two, three):
	print("%d%d%d" % (one, two, three), end="")


combination()