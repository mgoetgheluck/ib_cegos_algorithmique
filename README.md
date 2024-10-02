IB Cegos Algorithmics course

Exercice  1 :
Vous organisez un concours de dev où chaque participant a trois épreuves. Selon la moyenne des
scores, attribuez les niveaux suivants :
Moins de 50 : "Débutant"
Entre 50 et 70 : "Intermédiaire"
Plus de 70 : "Expert"

-> You can find my answer to this exercise inside index.js at exercise1 function

Exercice 2:
1. Demandez a l'utilisateur de saisir deux mots.
2. Convertissez les deux mots en majuscules.
3. Comparez les deux mots (en ignorant les espaces supplementaires) et indiquez s'ils sont
identiques.

-> You can find my answer to this exercise inside index.js at Exercise 2 function

Exercice 3:
Vous êtes développeur et vous devez créer un système de vérification des mots de passe. Le mot
de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, et un chiffre. Écrivez
un programme qui vérifie si un mot de passe donné respecte ces conditions.
1. Définir la regExp associée
2. Tester si valide

La regExp que nous utiliserons est la suivante: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/
