// fonctions utilisées

function args_to_array()
{
	let args = [];
	for (let i = 2; i < process.argv.length - 1; i++)
		args.push((process.argv[i]));
	return args;
}

function word_to_find()
{
	return process.argv[process.argv.length - 1];
}

function index_wanted(array, word)
{
	let i = 0;
	while (i < array.length)
	{
		if (array[i] === word)
		{
			return i;
		}
		i++;
	}
	return -1
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

// Partie 3 : Résolution
const tab = args_to_array();
const word = word_to_find();
const answer = index_wanted(tab, word);

// Partie 4 : Affichage
console.log(answer);