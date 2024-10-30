// Create an array to hold the titles of your favorite movie *and* your partners' favorite movies.
let moviesTitleArray = ["The Dark Knight", "Home Alone", "Dune"];

// Create an array with URLs for each movie poster.
let movieURLArray = [
    "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg",
    "https://upload.wikimedia.org/wikipedia/en/7/76/Home_alone_poster.jpg",
    "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Dune_%282021_film%29.jpg/220px-Dune_%282021_film%29.jpg"
];

// Create an array with links to the HTML files for each movie page.
let movieLinkArray = ["the-dark-knight.html", "home-alone.html", "dune.html"];

// Create an array to store each movie's rating (1 to 5). Try a different rating for each movie!
let movieRatingArray = [5, 4, 3];

// Select ALL movie card elements in the index.html file and store in a variable.
let movieCards = document.querySelectorAll(".movie-card");

// Loop through each card to update its content with movie information:
for (let i = 0; i < movieCards.length; i++) {
    // Select the current movie image element.
    let movieImage = movieCards[i].querySelector("img");
    // Set its link to the movie poster link from the array. 
    movieImage.src = movieURLArray[i];
    // Set its alt text to the movie title from the array.
    movieImage.alt = moviesTitleArray[i];

    // Select the current movie link element.
    let movieLink = movieCards[i].querySelector("a");
    // Set its link to the HTML page for that movie from the array.
    movieLink.href = movieLinkArray[i];
    // Set its text to the movie title from the array.
    movieLink.textContent = moviesTitleArray[i];

    // Select the current movie rating element.
    let movieRating = movieCards[i].querySelector(".rating");
    // Create a variable that will hold the filled and empty stars.
    let stars = "";

    // Loop to generate star symbols based on the rating.
	for (let j = 0; j < 5; j++) {
		if (j < movieRatingArray[i]) {
			stars += "★";
		} else {
			stars += "☆";
		}
	}
    // Set the movie rating element's text to display the generated stars.
    movieRating.textContent = stars;
}