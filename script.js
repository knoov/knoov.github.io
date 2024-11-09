let sandwichCount = 0;
let level = 0;
let autoProduction = 0;
let requiredToNextLvl = 10;

// Charger l'état sauvegardé depuis le localStorage
function loadGame() {
  const savedSandwichCount = localStorage.getItem("sandwichCount");
  const savedLevel = localStorage.getItem("level");
  const savedAutoProduction = localStorage.getItem("autoProduction");
  const savedRequiredToNextLvl = localStorage.getItem("requiredToNextLvl");

  if (savedSandwichCount !== null) sandwichCount = parseInt(savedSandwichCount);
  if (savedLevel !== null) level = parseInt(savedLevel);
  if (savedAutoProduction !== null) autoProduction = parseInt(savedAutoProduction);
  if (savedRequiredToNextLvl !== null) requiredToNextLvl = parseInt(savedRequiredToNextLvl);
}

// Sauvegarder l'état actuel dans le localStorage
function saveGame() {
  localStorage.setItem("sandwichCount", sandwichCount);
  localStorage.setItem("level", level);
  localStorage.setItem("autoProduction", autoProduction);
  localStorage.setItem("requiredToNextLvl", requiredToNextLvl);
}

// Réinitialiser le jeu
function resetGame() {
  sandwichCount = 0;
  level = 0;
  autoProduction = 0;
  requiredToNextLvl = 10;
  saveGame();
  updateDisplay();
}

// Fonction pour mettre à jour l'affichage
function updateDisplay() {
  document.getElementById("sandwich-count").textContent = sandwichCount;
  document.getElementById("level").textContent = level + " ("+sandwichCount+"/"+requiredToNextLvl+")";
  document.getElementById("auto-production").textContent = autoProduction;
}

// Fonction pour gérer le level up
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
  saveGame(); // Sauvegarder l'état après chaque clic
});

// Production automatique chaque seconde
setInterval(() => {
  sandwichCount += autoProduction;
  checkForNextLvl();
  updateDisplay();
  saveGame(); // Sauvegarder l'état régulièrement avec la production automatique
}, 1000);

// Bouton de réinitialisation
document.getElementById("reset-btn").addEventListener("click", resetGame);

// Charger le jeu au démarrage
loadGame();
updateDisplay();
