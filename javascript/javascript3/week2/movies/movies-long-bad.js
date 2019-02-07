/* fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
.then(response=>response.json())
.then(movies=>{
    const longMovies = movies.filter(movie => movie.running_times>7000);
    console.log(longMovies);
   return longMovies;

}).then(movies=>{
    const longTitles= movies.map(movie =>movie.title);
    console.log(longTitles);
}) */




let movies = fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(response => response.json())
    .then(movies => {
        return movies;
    });
/* movies.then( movies=>{
    const longMovies = movies.filter(movie => movie.running_times>17000);
    console.log(longMovies);
   return longMovies;
})
.then(movies=>{
    const longTitles= movies.map(movie =>movie.title);
    console.log(longTitles);
})
 */

/* ---------------------------------bad Movies -----------------------*/

movies.then(movies => {
        let badMovies = movies.filter(movie => movie.rating < 2);
        console.log(badMovies); 
        return badMovies;
        }
    )
.then(movies => { 
        let badSince2000 = movies.filter(movie => movie.year >= 2000);
        console.log(badSince2000); 
        return badSince2000; 
        }
    )
.then(movies => { 
        const badMovieTitles = movies.map(movie => (movie.title));
        console.log(badMovieTitles);
        }
    )