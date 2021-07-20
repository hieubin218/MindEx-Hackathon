import movies from "./DataLocation.js";


let baseUrl = "TrailerMovies.html?";
let baseDuration = "Thời Gian: ";
let baseNation = "Quốc Gia: ";
let baseTicketPrice = "Giá Vé: ";
let baseMovieType = " Thể Loại: ";




const convertToHtml = movie => {

    // Create div Element Movie-wrap (parent)
    let movieWrap = document.createElement("div");
    movieWrap.setAttribute("class", "movie-wrap");

    
    // Create div Element MovieImage (first-child Gen Z)
    let child1 = document.createElement("div");
    child1.setAttribute("class", "movieImage");

        // Create child of first-child
    let imageofChild1 = document.createElement("img");
    imageofChild1.setAttribute("class", "movieImages");

    console.log(movie.MovieImage);
    // imageofChild1.setAttribute("src", movie.MovieImage);
    imageofChild1.src = movie.MovieImage;

    child1.appendChild(imageofChild1);


//     <!-- <div class="movie-wrap">

//     <div class="movieImage">
//     <img src="BoGia.jpg" class="movieImages">
// </div>

// <div class="InfoMovies"> --> second child
//     <h5 class="MovieName"> BỐ GIÀ  (2D) </h5>
//     <p> <strong>Thời Gian:</strong> 128 phút</p>
//     <p> <strong> Quốc Gia:</strong> Việt Nam</p>
//     <p> <strong> Thể Loại:</strong> Family Drama Vietnam </p>
//     <p> <strong> Giá Vé:</strong> 60.000 VND  </p>

//     <div class="Button">
//         <button  value="Trailer1" class="btn btn-primary btnTrailer" type="button"> Watch Trailer </button>
//         <button value="Ticket1" class="btn btn-success btnTicket" type="button"> Buy Ticket</button>
//     </div>

// </div>
// </div> -->

    // Create Div Element infoMovies (second child of Gen Z)
    let child2 = document.createElement("div");
    child2.setAttribute("class", "InfoMovies");

    // Create child of second Gen Z child
        // Name
    let NameofMovieP = document.createElement("h5");
    NameofMovieP.setAttribute("class", "MovieName");
    NameofMovieP.innerText = movie.MovieName;

        // Duration
    let DurationP = document.createElement("p");
    DurationP.innerText = baseDuration + movie.Duration + "minutes";

        // Nation
    let NationP = document.createElement("p");
    NationP.innerText = baseNation + movie.Nation;

        // Movie Type
    let MovieTypeP = document.createElement("p");
    MovieTypeP.innerText = baseMovieType + movie.MovieType;

        // Ticket Price
    let PriceP = document.createElement("p");
    PriceP.innerText = baseTicketPrice + movie.TicketCost + " VND";


        // Append these babies inside the Gen Z second-child
    child2.appendChild(imageofChild1);
    child2.appendChild(NameofMovieP);
    child2.appendChild(DurationP);
    child2.appendChild(NationP);
    child2.appendChild(MovieTypeP);
    child2.appendChild(PriceP);

    
    // Create Div button is a Special baby of second-child
    let buttonDiv = document.createElement("div");
    buttonDiv.setAttribute("class", "Button");

        // Trailer Page Button
    let trailerBtn = document.createElement("a");
    trailerBtn.setAttribute("class", "btn btn-primary btnTrailer");
    // trailerBtn.setAttribute("id", movies[movie].MovieID);
    

    trailerBtn.href = baseUrl;
    trailerBtn.href = trailerBtn.href + "movieId=" + movie.MovieID;
    trailerBtn.innerText = "Watch Trailer";

        // Ticket Page Button
    let TicketBtn = document.createElement("a");
    TicketBtn.setAttribute("class", "btn btn-success btnTicket");
    TicketBtn.innerText = "Purchase Ticket";

    // inside Div button
    buttonDiv.appendChild(trailerBtn);
    buttonDiv.appendChild(TicketBtn);

    // Add to large div child2 <"InfoMovies">
    child2.appendChild(buttonDiv);
    
    // Add to Movie-wrap content (parent)
    movieWrap.appendChild(child2);


    // Add to the container (grand-parent)
    let movieContent = document.getElementById("movie-content");
    movieContent.appendChild(movieWrap);
}


for (let i = 0; i < movies.length; i++) {
    convertToHtml(movies[i]);
}



