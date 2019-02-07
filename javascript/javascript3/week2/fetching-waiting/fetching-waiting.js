

let mymovies=fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
.then(Response=>Response.json())
.then(movies=>{return movies;});

mymovies.then(movies=>{
    setTimeout(()=>{console.log(mymovies)},3000);
});

/* -------------------same functionality as above using chaining----------- */

fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
.then(Response=>Response.json())
.then(movies=>{ 
    setTimeout(() => {
    console.log(movies)
    }, 6000);
    }
);




