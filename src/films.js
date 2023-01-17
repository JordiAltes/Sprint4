const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const result = array.map((x) => x.director) 
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const moviesFromDirector = array.filter((x) => x.director === director)
  return moviesFromDirector
 
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const moviesFrom1Director = getMoviesFromDirector(array, director)
  const sumScore = moviesFrom1Director.reduce((total, movie) => {total += movie.score; return total},0)
  const howManyMovies = Number(moviesFrom1Director.length)
  const average = Number((sumScore / howManyMovies).toFixed(2))

  return average
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const arrayMovies = array
  const sortMovies = arrayMovies.map(x => x.title).sort().slice(0, 20)
  return sortMovies
  
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const sortByYears = array.map(movie => movie).sort((previous, later) => {
    const yearOrder = previous.year - later.year;
    if (yearOrder === 0) {
      if (previous.title < later.title) return -1;
      else return 1;
    }
    else return yearOrder
  })
  return sortByYears
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  const moviesByGenre = array.filter((x) => x.genre === genre);
  const sumScoreFrom1Genre = moviesByGenre.reduce((total, movie) => {total += movie.score; return total, 0});
  const lenghtOfFilmsOf1Genre = Number(moviesByGenre.length)
  const averageScoreOf1Genre = Number((sumScoreFrom1Genre / lenghtOfFilmsOf1Genre).toFixed(2))
  return averageScoreOf1Genre
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
