// fonctions utilisées

function args_to_array()
{
	let args = [];
	for (let i = 2; i < process.argv.length; i++)
		args.push(parseInt(process.argv[i]));
	return args;
}

function swap(array, index1)
{
	let tmp = array[index1];
	array[index1] = array[index1 + 1];
	array[index1 + 1] = tmp;
}

function my_bubble_sort(array)
{
	let new_array = array;
	let i = 1;
	// for (let i = 0; i < array.length; i++)
	while (i < array.length)
	{
		if (array[i] > array[i + 1])
		{
			swap(new_array, i);
			i = -1;
		}
		i++;
	}
	return (new_array)
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
const arg = args_to_array();
const answer = my_bubble_sort(arg).join(' ');

// Partie 4 : Affichage
console.log(answer);