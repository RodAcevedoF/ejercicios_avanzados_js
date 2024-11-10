function rollDice(n) {
  let min = 1;
  let sides = n;
  return Math.floor(Math.random() * (sides - min) + min); //Probé con Math.round pero cabia la posibilidad que diera n+1
}

console.log(rollDice(10));
