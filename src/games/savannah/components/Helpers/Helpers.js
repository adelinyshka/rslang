function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

export { getRandomNumber, shuffle };
