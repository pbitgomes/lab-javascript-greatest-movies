// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const diretores = moviesArray.map((item) => {
        return item.director;
      });
    return diretores
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    } else {
        const spielbergDrama = moviesArray.filter(item => item.director === "Steven Spielberg" && item.genre.includes("Drama"))
        return spielbergDrama.length
    }            
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    } else {
        const avgScore = moviesArray.score.reduce((acumulado, valorAtual) => {
            return (acumulado + valorAtual) / moviesArray.length
    })
    return avgScore.toFixed(2)
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const drama = moviesArray.filter((item) => {
        return item.genre.includes("Drama")
    })
    const avgDrama = drama.reduce((acumulado, valorAtual) => {
        return (acumulado + valorAtual) / drama.length
    })
    return avgDrama
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const orderedYear = moviesArray.map((item) => {
        return item.year.sort()
    })
    return orderedYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const orderedName = moviesArray.map((item) => {
        return item.title.sort()
    })
    return orderedName.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}