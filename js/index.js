//Exercice 1:
//1. Récupérer les valeurs des scores
//2. Calculer la moyenne de chaque participant
/*3. Si la moyenne calculée est inférieure à 50, return débutant
Sinon si elle est comprise entre 50 et 70, return intermédiaire
Sinon return expert*/

function exercise1(scoresArray){
	for(let i = 0; i < scoresArray.length; i++){
		let scores = scoresArray[i];
		let somme = 0;
		for(let j =0; j < scores.length; j++){
			somme += scores[j];
		}
		let moyenne = somme/scores.length;

		if(moyenne < 50){
			console.log("Joueur " + (i+1) + " Débutant");
		}
		else if(moyenne >= 50 && moyenne < 70){
			console.log("Joueur " + (i+1) + " Intermédiaire");
		}
		else {
			console.log("Joueur " + (i+1) + " Expert");
		}
	}
}

// exercise1([[50,70,100], [30,100,70], [100,100,100], [30,30,30]]);

//Exercice 2:
//1. On demande 2 valeurs à l'utilisateur
//2. On convertit les valeurs en majuscules
//3. On renvoie s'ils sont égaux


function exercise2(){
	//1. On demande les valeurs à l'utilisateur
	let premierMot = window.prompt("Entrez votre premier mot svp");
	let secondMot = window.prompt("Entrez votre second mot svp");
	//2. On convertit les mots en majuscules
	premierMot = toUpperCaseDemo(premierMot);
	secondMot = toUpperCaseDemo(secondMot);

	let isEqual = isMotsEqual(premierMot,secondMot);
	isEqual ? console.log("Vous avez rentré les deux mêmes mots") : console.log("Vos deux mots sont différents");
}

/* This functions returns the string parameter into uppercase */
function toUpperCaseDemo(string){
	if(string != null && typeof string == "string"){
		let newString = "";
		for(let i = 0; i < string.length; i++) {
			let char = string.charCodeAt(i);
			if(char >= 97 && char <= 123 ){
				char = char -32;
			}
			newString+=String.fromCharCode(char);
		}
		return newString;
	}
}

function isMotsEqual(mot1, mot2){
	let isEqual = true;
	let mot1Length = mot1.length;
	let mot2Lenth = mot2.length;
	if(mot1Length != mot2Lenth){
		return false;
	}
	let i =0;
	while(isEqual && i < mot1Length){
		if(mot1[i] != mot2[i]){
			return false;
		}
		i++;
	}
	return true;
}

//exercise2();


//Exercice 3
/*Vous êtes développeur et vous devez créer un système de vérification des mots de passe. Le mot
de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, et un chiffre. Écrivez
un programme qui vérifie si un mot de passe donné respecte ces conditions. */
function exercice3() {
	let password = prompt("Rentrez un mot de passe d'au moins 8 caractères comportant au moins une minuscule, une majuscule et un chiffre svp");
	let isAccepted = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(password);

	isAccepted ? console.log("Votre mot de passe est correct") : console.log("Votre mot de passe est incorrect");
}

exercice3();