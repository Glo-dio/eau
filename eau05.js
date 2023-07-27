// fonctions utilisées

function string_in_string(str1, str2)
{
	let i = 0;
	let j = 0;
	let previous_i = 0;

	while (i < str1.length)
	{
		if (str1[i] == str2[j])
		{
			previous_i = i;
			while (j < str2.length)
			{
				if (str1[i] != str2[j])
					break;
				if (j == str2.length - 1)
					return true;
				i++;
				j++;
			}
			i = previous_i;
			j = 0;
		}
		i++;
	}
	return false;
}

function is_arg_valid()
{
	if (is_nb_arg_correct === false)
		return false;
}

// Partie 1 : Gestion d'erreur
is_nb_arg_correct = process.argv.length > 3;

if (is_arg_valid() === false)
{
	console.log("error");
	process.exit(1);
}

// Partie 2 : Parsing
const string1 = process.argv[2];
const string2 = process.argv[3];

// Partie 3 : Résolution
const compare_value = string_in_string(string1, string2);

// Partie 4 : Affichage
console.log(compare_value);