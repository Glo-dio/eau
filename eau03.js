// fonctions utilisées

function error_message()
{
	console.log("-1");
	process.exit(1);
}
const argument = process.argv;

function fibonacci(index)
{
	if (index === 0)
		return 0;
	else if (index === 1)
		return 1;
	else
		return (fibonacci(index - 1) + fibonacci(index - 2));
}

const is_nb_arg_correct = argument.length === 3;
const is_arg_correct = isNaN(argument[2]) == false;

// Partie 1 : Gestion d'erreur

if (is_nb_arg_correct === false)
	error_message();
if (is_arg_correct == false)
	error_message();
if (parseInt(argument[2]) < 0)
	error_message();

// Partie 2 : Parsing
const element = parseInt(argument[2]);

// Partie 3 : Résolution
const result_fibonacci = fibonacci(element);

// Partie 4 : Affichage
console.log(result_fibonacci);