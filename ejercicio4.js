//1
function findArrayIndex(arr, txt) {
  if (arr.length === 0 || txt === "") {
    throw new Error("Enter valid arguments");
  } else if (!arr.includes(txt)) {
    return `Sorry, ${txt} not found`;
  }
  return `Position of ${txt} is: ${arr.indexOf(txt)}`;
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan"
];

console.log(findArrayIndex(mainCharacters, "Leia"));
console.log(findArrayIndex(mainCharacters, "Jango Fett"));
console.log(findArrayIndex(mainCharacters, "Han Solo"));

// 2 Creo que he complicado de más la funcion asi que hare una version corta aqui
const findArrayIdx = (array, text) => {
  return array.indexOf(text);
};

function removeItem(_array, _txt) {
  let position = findArrayIdx(_array, _txt);
  if (position !== -1) {
    _array.splice(position, 1);
  }
  return _array;
}

console.log(removeItem(mainCharacters, "Rey"));
console.log(removeItem(mainCharacters, "Anakin"));
