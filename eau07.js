// fonctions utilisées

function to_upper(char)
{
	let letter;

	if (char.charCodeAt() > 96 && char.charCodeAt() < 123)
	{
		letter = char.charCodeAt() - 32;
		letter = String.fromCharCode(letter);
		return letter
	}

}

function up_first_word_s_letter(str)
{
	let i = 0;
	let new_string = [];

	if (str[0].charCodeAt() > 96 && str[0].charCodeAt() < 123)
	{
		new_string.push(to_upper(str[0]));
		i++;
	}
	
	while (i < str.length)
	{
		if (((str[i].charCodeAt() == 9) || (str[i].charCodeAt() == 10) || (str[i].charCodeAt() == 32)) 
			&& (str[i + 1].charCodeAt() > 96 && str[i + 1].charCodeAt() < 123))
		{
			new_string.push(str[i]);
			i++;
			new_string.push(to_upper(str[i ]));
		}
		else
			new_string.push(str[i]);
		i++;
	}
	return new_string;
}

function is_arg_valid()
{
	if (is_nb_arg_correct === false)
		return false;
	if (isNaN(process.argv[2]) == false)
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
const new_str = up_first_word_s_letter(arg).join('');

// Partie 4 : Affichage
console.log(new_str);