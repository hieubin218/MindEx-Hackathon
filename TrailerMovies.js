import movies from "./DataLocation.js";


let movieId = 2;



let movie = movies.find(movie => movie.MovieID == movieId);

let des = document.getElementById("Description-text");
des.innerText = movie.Description;


let iframeURL = document.getElementById("iframeSource");
iframeURL.src = movie.YoutubeLink;



