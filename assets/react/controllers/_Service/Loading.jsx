export function updateProgress(duration, callback) {
    const interval = 10; // Intervalle de mise à jour en millisecondes
    const steps = duration / interval; // Nombre de pas
  
    let currentStep = 0;
    let progress = 0;
  
    const update = () => {
      currentStep++;
      progress = Math.round(currentStep / steps * 100);
      callback(progress);
  
      if (currentStep < steps) {
        setTimeout(update, interval);
      }
    };
  
    update();
  }
  