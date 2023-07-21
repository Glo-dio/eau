/****************************************/
/*			NON TERMINE					*/
/****************************************/

// fonctions utilisées

function to_upper_one_two(str)
{
	let i = 0;

	while (i < str.length)
	{
		if (i % 2 === 0)
			str[i] = str[i + 32]
		i++;
	}

	return str
}
// Partie 1 : Gestion d'erreur
// Partie 2 : Parsing
const arg = process.argv[2];
// Partie 3 : Résolution
const new_string = to_upper_one_two(arg);
// Partie 4 : Affichage
console.log(new_string);