// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");


function demarrerLaMontre() {

    //Extraire l'heure actuel à l'aide de l'objet Date()
    let date = new Date();

    //Ajouter l'heure , minite , seconde  dans des varaiables
    let sec = date.getSeconds() / 60;
    let min = (date.getMinutes() + sec) / 60;
    let hour = (date.getHours() + min) / 12;


    // Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
    // Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré
    // Déplacer les aiguilles 
    AIGUILLESEC.style.transform = "rotate(" + (sec * 360) + "deg)";
    AIGUILLEMIN.style.transform = "rotate(" + (min * 360) + "deg)";
    AIGUILLEHR.style.transform = "rotate(" + (hour * 360) + "deg)";

}
// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);






