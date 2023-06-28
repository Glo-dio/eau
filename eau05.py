import sys

# fonctions utilisées
def is_present(string1, string2):
	i = 0
	j = 0
	string = []
	while i < len(string1):
		if string1[i] == string2[j]:
			string.append(string2[j])
			i += 1
			j += 1
		else:
			i += 1
	if string == string2:
		return string
	else:
		return False

# Partie 1 : Gestion d'erreur


# Partie 2 : Parsing
string_1 = sys.argv[1]
string_2 = sys.argv[2]

string = []

# Partie 3 : Résolution
# string_in_string = is_present(string_1, string_2)


print(string_1, string_2, string)
string.append(string_2[0])
string.append(string_2[1])
string.append(string_2[2])
string.append(string_2[3])
print(string_1, string_2, string)


# Partie 4 : Affichage
# print(string_in_string)
