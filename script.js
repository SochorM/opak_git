let clickCount = 0;

const moods = [
  "Jsem v zóně, nikdo mě nezastaví! 🎯",
  "Ugh, zase afk spoluhráč...",
  "ACE! To byl nejlepší round v mém životě!",
  "Eco round, modlím se za pistolku...",
  "Ranked grind pokračuje. Jdeme na to!",
  "GG, to byl čistý headshot!",
];

function changeMood() {
  clickCount++;
  document.getElementById("click-count").textContent = clickCount;

  const randomMood = moods[Math.floor(Math.random() * moods.length)];
  document.getElementById("mood-text").textContent = randomMood;
}