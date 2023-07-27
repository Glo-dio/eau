// fonctions utilisées

function nb_premier(nb)
{
	let i = 2;
		while (i < nb)
		{
			if (nb % i === 0)
				return 0;
			i++;
		}
	return 1;
}

function find_next_nb_premier(nb)
{
	if (nb_premier(nb) === 1)
		return nb;
	nb++;
	while (nb_premier(nb) === 0)
		nb++;
	return nb;
}

function is_arg_valid()
{
	if (is_nb_arg_correct === false)
		return false;
	if (isNaN(process.argv[2]) == true)
		return false;
	if (process.argv[2][0] === '-')
		return false;
}

// Partie 1 : Gestion d'erreur
is_nb_arg_correct = process.argv.length === 3;

if (is_arg_valid() === false)
{
	console.log("-1");
	process.exit(1);
}

// Partie 2 : Parsing
const number = parseInt(process.argv[2])

// Partie 3 : Résolution
const next_nb_premier = find_next_nb_premier(number);

// Partie 4 : Affichage
console.log(next_nb_premier);