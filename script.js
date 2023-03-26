const ol = document.querySelector("ol")
const movies = [
    {
        name: "1917",
        year: 2020,
        director: "Sam Mendes",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fe/1917_%282019%29_Film_Poster.jpeg/220px-1917_%282019%29_Film_Poster.jpeg"
    },
    {
        name: "Godzilla",
        year: 1954,
        director: "Ishirō Honda",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Gojira_1954_Japanese_poster.jpg/220px-Gojira_1954_Japanese_poster.jpg"
    },
    {
        name: "The Thing",
        year: 1982,
        director: "John Carpenter",
        image: "https://upload.wikimedia.org/wikipedia/en/a/a6/The_Thing_%281982%29_theatrical_poster.jpg"
    },
];

const template = movies.map(movie => `
<li>
    <p>Name: ${movie.name}</p>
    <p>Release date: ${movie.year}</p>
    <p>Director: ${movie.director}</p>
    <img src="${movie.image}"/>
 </li>
`);

ol.innerHTML = template.join('');