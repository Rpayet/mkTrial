
{/* Formate le temps stocké dans la BDD au format "m:ss:fsfsfs" */}
export function formatTime(timeInMs) {
    const date = new Date(timeInMs);
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();
    const milliseconds = date.getUTCMilliseconds().toString().padStart(3, "0");
    return `${minutes}:${seconds.toString().padStart(2, "0")}.${milliseconds}`;
}

export function formatDate(dateTime) {
    const date = new Date(dateTime);
    return date;
}

{/* Formate le temps en "Lundi 01 Juin 2023" */}
export function getFormattedDate(dateString) {
    const date = new Date(dateString);
  
    // Tableaux pour les jours de la semaine et les mois en français
    const joursSemaine = [
      'dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'
    ];
    const mois = [
      'janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet',
      'août', 'septembre', 'octobre', 'novembre', 'décembre'
    ];
  
    // Récupération des composants de la date
    const jour = joursSemaine[date.getDay()];
    const jourMois = ('0' + date.getDate()).slice(-2);
    const moisAnnee = mois[date.getMonth()];
    const annee = date.getFullYear();
  
    return `${jour} ${jourMois} ${moisAnnee} ${annee}`;
  }
  