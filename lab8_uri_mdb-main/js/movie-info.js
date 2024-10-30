// Create an array to hold the title of your favorite movie, URL for movie poster, your rating, and synopsis.
let favoriteMovie = ["The Dark Knight", "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg", "5", "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."];

// Select the movie image element.
let movieImage = document.querySelector(".movie-image");

// Set its link to the movie poster link from the array.
movieImage.src = favoriteMovie[1];

// Set its alt text to the movie title from the array.
movieImage.alt = favoriteMovie[0];

// Select the movie name element.
let movieName = document.querySelector(".movie-name");

// Set its text to the movie title from the array.
movieName.textContent = favoriteMovie[0];

// Select the movie description element.
let movieDescription = document.querySelector(".description");

// Set its text to the movie synopsis from the array.
movieDescription.textContent = favoriteMovie[3];

// Select the movie rating element.
let movieRating = document.querySelector(".rating");

// Create a variable that will hold the filled and empty stars.
let stars = "";

// Loop to generate star symbols based on the rating:
for (let i = 0; i < 5; i++) {
    // If current counter is less than your rating, then add "★", otherwise add "☆".
    if (i < favoriteMovie[2]) {
        stars += "★";
    } else {
        stars += "☆";
    }
}

// Set the movie rating element's text to display the generated stars.
movieRating.textContent = stars;