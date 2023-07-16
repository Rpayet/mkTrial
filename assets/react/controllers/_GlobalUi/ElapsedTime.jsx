import React from 'react';

export default function ElapsedTime({ date }) {
  // Calculer le temps écoulé depuis la date spécifiée jusqu'à maintenant
  const elapsedTime = calculateElapsedTime(date);

  // Fonction pour calculer le temps écoulé
  function calculateElapsedTime(date) {
    const timeElapsed = Date.now( ) - new Date(date).getTime();

    // Convertir le temps écoulé en différentes unités
    const seconds = Math.floor(timeElapsed / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    // Déterminer l'unité de temps appropriée en fonction de la durée écoulée
    if (seconds < 60) {
      return `${seconds} seconde${seconds !== 1 ? 's' : ''}`;
    } else if (minutes < 60) {
      return `${minutes} minute${minutes !== 1 ? 's' : ''}`;
    } else if (hours < 24) {
      return `${hours} heure${hours !== 1 ? 's' : ''}`;
    } else if (days < 7) {
      return `${days} jour${days !== 1 ? 's' : ''}`;
    } else if (weeks < 4) {
      return `${weeks} semaine${weeks !== 1 ? 's' : ''}`;
    } else if (months < 12) {
      return `${months} mois`;
    } else {
      return `${years} an${years !== 1 ? 's' : ''}`;
    }
  }

  return <p>Il y a {elapsedTime}</p>;
}
