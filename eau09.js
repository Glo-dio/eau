// fonctions utilisées

function min_max(first, second)
{
	let min = 0;
	let max = 0;
	let numbers = [];

	if (first < second)
		min = first, max = second;
	else if (first > second)
		min = second , max = first;

	for (let i = min ; i < max; i++)
		numbers.push(i);

	return numbers;
}

function is_arg_valid()
{
	if (is_nb_arg_correct === false)
		return false;
	if (isNaN(process.argv[2]) == true || isNaN(process.argv[3]) == true)
		return false;
}

// Partie 1 : Gestion d'erreur
is_nb_arg_correct = process.argv.length === 4;

if (is_arg_valid() === false)
{
	console.log("error");
	process.exit(1);
}

// Partie 2 : Parsing
const arg1 = parseInt(process.argv[2]);
const arg2 = parseInt(process.argv[3]);

// Partie 3 : Résolution
const list = min_max(arg1, arg2).join(' ');

// Partie 4 : Affichage
console.log(list);