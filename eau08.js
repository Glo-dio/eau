// fonctions utilisées

function is_numeric()
{
	let i = 0;

	while (i < arg.length)
	{
		if (arg[i].charCodeAt() < 48 || arg[i].charCodeAt() > 57)
			return false
		i++;
	}
	return true
}

function is_arg_valid()
{
	if (is_nb_arg_correct === false)
		return false;
}

// Partie 1 : Gestion d'erreur
is_nb_arg_correct = process.argv.length === 3;

if (is_arg_valid() === false)
{
	console.log("error");
	process.exit(1);
}

// Partie 2 : Parsing
const arg = process.argv[2];

// Partie 3 : Résolution
const answer = is_numeric();

// Partie 4 : Affichage
console.log(answer);