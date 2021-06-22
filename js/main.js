'use strict';

let numberOfFilms = '';
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
let personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};
if (personalMovieDB.count < 10){
    alert("Просмотрено довольно мало фильмов!");
}
else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
    alert("Вы классический зритель!");
}
else if (personalMovieDB.count > 30){
    alert("Да вы киноман!");
}
else{
    alert("Произошла ошибка!");
}

let a = '',
    b = '';

for( let i = 0; i < 2; i++){
    let a = prompt('Какой фильм вы смотрели последним?', ''),
        b = +prompt('Дайте оценку этому фильму:', '');
    if(a != null && b != null && a != '' && b != '' && a.length <= 50){
        personalMovieDB.movie[a] = b;
        console.log("done");
    }
    else{
        console.log("error");
        i--;
    }
}
console.log(personalMovieDB);

console.log(personalMovieDB);