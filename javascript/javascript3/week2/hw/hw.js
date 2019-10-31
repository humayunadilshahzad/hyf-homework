let badMovies, badMoviesSince2000, TitleBadMoviesSince2000;

////////////////////  Movies Exercise ///////////////////////////

//under 3 rating is considered bad movie


fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(res => res.json())
    .then(movies => {

        badMovies = movies.filter(movie => movie.rating < 3);
        console.log(badMovies);

        badMoviesSince2000 = movies.filter(movie => movie.rating < 3 && movie.year >= 2000)
        console.log(badMoviesSince2000);

        TitleBadMoviesSince2000 = movies.filter(movie => movie.rating < 3 && movie.year >= 2000).map(movie => movie.title)
        console.log(TitleBadMoviesSince2000);
    });

// setTimeout(() => {

//     console.log(badMovies);
//     console.log(badMoviesSince2000);
//     console.log(TitleBadMoviesSince2000);

// }, 5000);


//////////////////////////////////// Promise resolved after set time ////////////////////////////////////////7

let myPromise = (resolveAfter) => {


    return new Promise((res, rej) => {
        setTimeout(() => {
            let resMsg = 'Im called Async';
            if (resolveAfter >= 6)
                res(resMsg);
            else
                rej('some error has happend');
        }, resolveAfter * 1000);
    });

}
//console.log(myPromise(2));
myPromise(6).then(res => { console.log(res) }).catch(err=>{console.log(err)});
