const movies = [
  {
    title: "Bracula: Condemor II",
    duration: 192,
    categories: ["comedia", "aventura"]
  },
  {
    title: "Spider-Man: No Way Home",
    duration: 122,
    categories: ["aventura", "acción"]
  },
  {
    title: "The Voices",
    duration: 223,
    categories: ["comedia", "thriller"]
  },
  {
    title: "Shrek",
    duration: 111,
    categories: ["comedia", "aventura", "animación"]
  }
];
let categoriesList = new Array();

for (let movie of movies) {
  for (let category of movie.categories) {
    if (!categoriesList.includes(category)) {
      categoriesList.push(category);
    }
  }
}

console.log(categoriesList);
