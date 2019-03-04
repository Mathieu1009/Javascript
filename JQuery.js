"use strict";
// Quand le rendu de la page sera terminé, utilisez les selecteurs jQuery pour sélectionner et logguer:

// toutes les balises <div>
$('div');
console.log('all divs', $('div'));
// toutes les balises avec le nom de classe js-paragraph
$('.js-paragraph');
console.log('select by class name', $('.js-paragraph'));

// la balise avec l'id js-unique-paragraph
$('.js-unique-paragraph');
console.log('select by class name js-unique', $('.js-paragraph'));

// le premier titre <h3>
$('h3:first');
console.log('Le premier titre <h3>', $('.h3:first'));
// le premier <th> du premier <tr>
$('')
console.log('Le premier <th> du premier <tr>', $('.tr:first:th:first'))

// le premier <td> du chaque <tr>

// tous les liens

// tous les lien externes (ceux qui ont l'attribut target égal à _blank)

// tous les lien internes (ceux qui n'ont pas d'attribut target égal à _blank)

// tous les boutons dans un formulaire