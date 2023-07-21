/****************************************/
/*			NON TERMINE					*/
/****************************************/


// fonctions utilisées

function string_in_string(str_1, str_2)
{
	let i = 0;
	let j = 0;
	let result = [];

	while (str_1[i])
	{
		while (str_2[j] == str_1[i])
		{
			result.push(str_2[j]);
			// i++;
			j++;
		}
		// console.log(str_1[i]);
		i++;
	}
	result = new String(result);
	console.log(str_1);
	console.log(str_2);
	console.log(String(result));

	console.log(typeof str_1);
	console.log(typeof str_2);
	console.log(typeof result);

	if (str_2 == result)
		return true;
	else
		return false;
}
// Partie 1 : Gestion d'erreur
// Partie 2 : Parsing
const string1 = process.argv[2];
const string2 = process.argv[3];
// Partie 3 : Résolution
const compare_value = string_in_string(string1, string2)
// Partie 4 : Affichage
// console.log(string1);
// console.log(string2);
console.log(compare_value);