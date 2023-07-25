// fonctions utilisées

function to_upper_one_two(str)
{
	let i = 0;
	let letter;
	let new_str = [];

	while (i < str.length)
	{
		if (i % 2 === 0
			&& (str[i].charCodeAt(0) > 96 && str[i].charCodeAt(0) < 123))
		{
			letter = str[i].charCodeAt(0) - 32;
			letter = String.fromCharCode(letter)
			new_str.push(letter);
		}
		else	
			new_str.push(str[i]);
		i++;
	}
	return new_str;
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
const new_string = to_upper_one_two(arg).join('');
// Partie 4 : Affichage
console.log(new_string);