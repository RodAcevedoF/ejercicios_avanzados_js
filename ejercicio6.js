const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa"
];

function swap(str1, str2, arr) {
  if (!arr.includes(str1) || !arr.includes(str2)) {
    return "Invalid argument";
  }
  let position1 = arr.indexOf(str1);
  let position2 = arr.indexOf(str2);
  arr.splice(position1, 1, str2);
  arr.splice(position2, 1, str1);
  return arr;
}

console.log(swap("La antorcha humana", "La cosa", fantasticFour));
console.log(swap("Mr. Fantástico", "La mujer invisible", fantasticFour));
