import sys

# fonctions utilisées
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

def find_next_nb_premier(nb):
	if nb_premier(nb) == 1:
		return nb
	nb += 1
	while nb_premier(nb) == 0:
		nb += 1
	return nb

def is_args_valid():
	if is_nb_arg_correct == False:
		return False
	if sys.argv[1].isdigit() == False:
		return False


# Partie 1 : Gestion d'erreur
is_nb_arg_correct = True if len(sys.argv) == 2 else False

if is_args_valid() == False:
	print(-1)
	exit()

# Partie 2 : Parsing
nombre = int(sys.argv[1])


# Partie 3 : Résolution
next_nb_premier = find_next_nb_premier(nombre)

# Partie 4 : Affichage
print(next_nb_premier)