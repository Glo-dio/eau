// fonctions utilisées

function args_to_array()
{
	let args = [];
	for (let i = 2; i < process.argv.length; i++)
		args.push((process.argv[i]));
	return args;
}

function swap(array, index1, index2)
{
	let tmp = array[index1];
	array[index1] = array[index2];
	array[index2] = tmp;
}

function my_select_sort(array)
{
	let new_array = array;
	let k = 0;

	for (let i = 0; i < new_array.length; i++)
	{
		min = i;

		for (let j = i + 1; j < new_array.length; j++)
		{
			k = 0;
			if (new_array[j].charCodeAt(k) == new_array[min].charCodeAt(k))
			{
				while (new_array[j].charCodeAt(k) == new_array[min].charCodeAt(k) && k < new_array[j].length)
					k++;
				if (new_array[j].charCodeAt(k) < new_array[min].charCodeAt(k))
					min = j;
			}
			else if (new_array[j].charCodeAt(k) < new_array[min].charCodeAt(k))
				min = j;
		}
		swap(new_array, i, min);
	}
	return new_array;
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
const answer = my_select_sort(tab).join(' ');

// Partie 4 : Affichage
console.log(answer);