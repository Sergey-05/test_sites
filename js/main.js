'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
let personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};
let a = prompt('Какой фильм вы смотрели последним?', ''),
    b = prompt('Дайте оценку этому фильму:', ''),
    c = prompt('Какой фильм вы смотрели последним?', ''),
    d = prompt('Дайте оценку этому фильму:', '');
    personalMovieDB.movie[a] = b;
    personalMovieDB.movie[c] = d;
console.log(personalMovieDB);
