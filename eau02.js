// fonctions utilisées

const argument = process.argv
let len_args = argument.length - 1

function reverse_args()
{
	while (len_args > 1)
		console.log(argument[len_args--]);
}

// Partie 1 : Gestion d'erreur
const is_number_arg_are_correct = len_args > 1;

// Partie 2 : Parsing
// Partie 3 : Résolution
if (is_number_arg_are_correct === false)
	console.log("error.");
else
	reverse_args();

// Partie 4 : Affichage