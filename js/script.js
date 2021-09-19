let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", ""),
	movies = {},
	actors = {},
	genres = [],
	answers = [];
let personalMovies = {
	count: numberOfFilms,
	movies: movies,
	actors: actors,
	genres: genres,
	privat: false
};

let movie1, movie2, rate1, rate2;

movie1 = prompt("Один из просмотренных фильмов", "");
rate1 = prompt("Как оцените его?", "");
movie2 = prompt("Один из просмотренных фильмов", "");
rate2 = prompt("Как оцените его?", "");

personalMovies.movies[movie1] = rate1;
personalMovies.movies[movie2] = rate2;

console.log(personalMovies);



