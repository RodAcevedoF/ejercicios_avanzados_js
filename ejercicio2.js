const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 }
    }
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 }
    }
  },
  {
    name: "Santiago",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 }
    }
  },
  {
    name: "Laura",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 }
    }
  }
];

let gralVolume = 0;
let counter = 0;

for (let user of users) {
  for (let key in user.favoritesSounds) {
    gralVolume += user.favoritesSounds[key].volume;
    counter++;
  }
}
let result = gralVolume / counter;

console.log(`El volumen promedio para todos los usuarios es: ${result}`);

// No sabía si era el promedio general o por usuario, aqui esta la solucion por usuario

for (let user of users) {
  let counter = 0;
  user.avgVolume = 0;
  for (let key in user.favoritesSounds) {
    user.avgVolume += user.favoritesSounds[key].volume;
    counter++;
  }
  user.avgVolume = (user.avgVolume / counter).toFixed(2);
  console.log(`El volumen promedio para ${user.name} es: ${user.avgVolume}`);
}
