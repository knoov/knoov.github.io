let sandwichCount = 0;
let level = 0;
let autoProduction = 0;
let requiredToNextLvl = 10;

// Fonction pour mettre à jour l'affichage
function updateDisplay() {
  document.getElementById("sandwich-count").textContent = sandwichCount;
  document.getElementById("level").textContent = level;
  document.getElementById("auto-production").textContent = autoProduction;
}

// Fonction pour gerer le level up
function checkForNextLvl() {
  if (sandwichCount >= requiredToNextLvl) {
    level++;
    autoProduction++;
    requiredToNextLvl += 10 * level;
  }
}

// Fonction pour fabriquer un sandwich manuellement
document.getElementById("sandwich-btn").addEventListener("click", () => {
  sandwichCount++;
  checkForNextLvl();
  updateDisplay();
});

// Production automatique chaque seconde
setInterval(() => {
  sandwichCount += autoProduction;
  checkForNextLvl();
  updateDisplay();
}, 1000);

updateDisplay();
