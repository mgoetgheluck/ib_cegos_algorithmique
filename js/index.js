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

exercise1([[50,70,100], [30,100,70], [100,100,100], [30,30,30]]);