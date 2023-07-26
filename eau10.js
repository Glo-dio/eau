// fonctions utilisées

function args_to_array()
{
	let args = [];
	for (let i = 2; i < process.argv.length; i++)
		args.push(parseInt(process.argv[i]));
	return args;
}

function absolute_min(array)
{
	let result = 1000 * 1000;
	let i = 0;

	while (i < array.length)
	{
		j = i + 1;
		while (j < array.length)
		{
			if (array[j] - array[i] < result && array[i] - array[j] < 0)
				result = array[j] - array[i];
			else if (array[i] - array[j] < result && array[i] - array[j] > 0)
				result = array[i] - array[j];
			j++;
		}
		i++;
	}
	return result;
}

function is_arg_valid()
{
	if (is_nb_arg_correct === false)
		return false;
	for (let i = 2; i < process.argv.length ; i++)
	{
		if (isNaN(process.argv[i]) == true)
			return false;
	}	
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
const answer = absolute_min(tab);

// Partie 4 : Affichage
console.log(answer);