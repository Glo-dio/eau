// fonctions utilisées

function combination()
{
	let tab_number = [];
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
				tab_number.push(print_numbers(nb_one, nb_two, nb_three));
				nb_three++;
			}
			nb_two++;
		}
		nb_one++;
	}
	console.log(tab_number.join(', '));
}

function print_numbers(one, two, three)
{
	const number = [one,two,three];
	const new_number = number.join('')
	return new_number;
}


// Partie 1 : Gestion d'erreur
// Partie 2 : Parsing
// Partie 3 : Résolution
combination();
// Partie 4 : Affichage