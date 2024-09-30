// Définir un tableau de chaînes
const chaines = ["Animaux ", " Homme ", " fournitures ", " @ ", " routes ", " box "];

// Utiliser la méthode .filter() pour renvoyer un tableau avec des chaînes de longueur > 3
const chainesLongues = chaines.filter(chaine => chaine.length > 3);

// Afficher le résultat
document.write(chainesLongues); // ["chien", "éléphant"]
