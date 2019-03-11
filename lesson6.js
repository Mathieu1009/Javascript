'use strict'

// lors d'un click sur 'Know more', on affiche le menu déroulant avec l'id navbarDropdownMenu. Et lors d'un deuxieme click sur le lien, on cache le menu.

$('#navbarDropdownMenuLink').click(() => {
    $('#navbarDropdownMenu').fadeToggle(); // J'ai utilisé la fonction fadeToggle qui gère à la fois le In et le Out
})

// Dans le <footer> j'ai affiché l'année dans laquelle on se trouve en modifiant le texte du <span> avec l'id js-current-year. La date d'aujourd'hui est récupéré avec l'objet Date et sa méthode getFullYear.

var Date1 = new Date(); 

$('#js-current-year').text(Date1.getFullYear()); // Cela ajoute l'année en cours dans le span


const inputWeight = $('js-bmi-weight').val();
const inputHeight = $('js-bmi-height').val();
var result = inputWeight / ((inputHeight / 100) * (inputHeight / 100));
function BMI(result) {
    if (result < 18.5) {
        return 'considered underweight'
    }
    else if ( 18.5 <= result <= 25) {
        return 'healthy weight'
    }
    else if (result > 25) {
        return 'considered overweight'
    }
}
$('#js-button')[0].addEventListener('submit', (event) => {
    event.preventDefault();
    $('#calculator').append('<p>Your BMI is'+ result + 'It is' +  BMI() + '</p>.')

})