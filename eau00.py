def combination():
	nb_one = 0
	nb_two = nb_one + 1
	nb_tree = nb_two + 1

	for first_nb in range(nb_one, 8):
		nb_two = nb_one + 1
		for second_nb in range(nb_two, 9):
			nb_tree = nb_two + 1
			for thrird_nb in range(nb_tree, 10):
				print_numbers(nb_one,nb_two,nb_tree)
				nb_tree += 1
				if nb_one != 7:
					print(", ",end="")
			nb_two += 1
		nb_one += 1

def print_numbers(one, two, tree):
	print("%d%d%d" % (one, two, tree), end="")


combination()