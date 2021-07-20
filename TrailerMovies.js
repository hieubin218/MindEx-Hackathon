import movies from "./DataLocation.js";


let movieId = 6;



let movie = movies.find(movie => movie.MovieID == movieId);

// Description Section
let des = document.getElementById("Description-text");
des.innerText = movie.Description;


// Display the Movie by URL
let iframeURL = document.getElementById("embed-responsive-item");
iframeURL.src = movie.YoutubeLink;


// Movie Information Section
let name = document.getElementById("Movie-Name");
name.innerText = movie.MovieName;

let imgurl = document.getElementById("Ads");
imgurl.src = movie.MovieImage;


let duration = document.getElementById("duration");
duration.innerText = "Thời Gian: " + movie.Duration + " Minutes";


let country = document.getElementById("nation");
country.innerText = "Quốc Gia: " + movie.Nation;


let type = document.getElementById("typeOfMovie");
type.innerText = "Thể Loại: " + movie.MovieType;


let cost = document.getElementById("price");
cost.innerText = "Giá Vé: " + movie.TicketCost + " VND";