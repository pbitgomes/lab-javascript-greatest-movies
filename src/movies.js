// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const movies = require("./data.js");

function getAllDirectors(movies) {
    const diretores = movies.map((item) => {
        return item.director;
      });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    if (movies.length === 0) {
        return 0
    } else {
        const spielbergDrama = movies.filter(item => item.director === "Steven Spielberg" && item.genre.includes("Drama"))
        return spielbergDrama.length
    }            
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
    const avgScore = movies.reduce((acumulado, valorAtual) => {
        return (acumulado + valorAtual) / movies.length
    })
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
    const drama = movies.filter((item) => {
        return item.genre.includes("Drama")
    })
    const avgDrama = drama.reduce((acumulado, valorAtual) => {
        return (acumulado + valorAtual) / drama.length
    })
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    const orderedYear = movies.year.sort()
    return orderedYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    const orderedName = movies.name.sort()
    return orderedName.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {}