// fonctions utilisées

function combination()
{
	let nb_one = 0;
	let nb_two = nb_one + 1;

	while (nb_one < 99)
	{
		nb_two = nb_one + 1;
		while (nb_two < 100)
		{
			print_numbers(nb_one, nb_two);
			nb_two++;
		}
		nb_one++;
	}
}

function print_numbers(one, two)
{
	console.log(`${one} ${two}`);
}
// Partie 1 : Gestion d'erreur
// Partie 2 : Parsing
// Partie 3 : Résolution
combination();
// Partie 4 : Affichage