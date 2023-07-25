/****************************************/
/*			NON TERMINE					*/
/****************************************/


// fonctions utilisées

function string_in_string()
{
	let i = 0;
	let j = 0;
	let result = [];

	while (i < string1.length)
	{
		while (j < string2.length)
		{
			if (string2[j] == string1[i])
			{
				result.push(string2[j]);
				i++;
				j++;
			}
		}
		i++;
	}
	// result = String(result);

	result = result.join('');

	// console.log(typeof string1);
	// console.log(typeof string2);
	// console.log(typeof result);
	if (string2 == result)
	{
		// console.log("different");
		console.log("egal");
	}

	return result;
}
// Partie 1 : Gestion d'erreur
// Partie 2 : Parsing
const string1 = process.argv[2];
const string2 = process.argv[3];
// Partie 3 : Résolution
const compare_value = string_in_string()
// Partie 4 : Affichage
console.log("\n" + string1);
console.log(string2);
console.log(compare_value);