// fonctions utilisées

function combination()
{
	let nb_one = 0;
	let nb_two = nb_one + 1;
	let nb_three = nb_two + 1;

	while (nb_one < 8)
	{
		nb_two = nb_one + 1;
		while (nb_two < 9)
		{
			nb_three = nb_two + 1;
			while (nb_three < 10)
			{
				print_numbers(nb_one, nb_two, nb_three)
				// console.log(`${nb_one}${nb_two}${nb_three}`);
				nb_three++;
			}
			nb_two++;
		}
		nb_one++;
	}
}

function print_numbers(one, two, three)
{
	console.log(`${one}${two}${three}`);
}


// Partie 1 : Gestion d'erreur
// Partie 2 : Parsing
// Partie 3 : Résolution
combination();
// Partie 4 : Affichage