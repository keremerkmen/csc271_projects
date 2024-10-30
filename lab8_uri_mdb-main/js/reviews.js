// Create an array to hold three different usernames.
let usernameArray = ["Miles Bailey", "Abigail Chipps", "Eric Pohl"];

// Create an array with the dates of each review (i.e., 2024-10-30).
let dateArray = ["2024-10-30", "2024-10-31", "2024-11-01"];

// Create an array to hold the actual reviews.
let reviewArray = ["Great movie! I loved it!", "It was okay. Not my favorite.", "I didn't like it."];

// Create an array to hold three different ratings.
let ratingArray = [5, 3, 1];

// Select ALL review card elements and store in a variable.
let reviewCards = document.querySelectorAll(".review-card");

// Loop through each card to update its content with review information:
for (let i = 0; i < reviewCards.length; i++) {
    // Select the current review rating element.
    let reviewRating = reviewCards[i].querySelector(".review-rating");
    // Get the rating from the array based on the current index.
    let selected_rating = ratingArray[i];
    // Create a variable that will hold the filled and empty stars.
    let stars = "";
    // Loop to generate star symbols based on the rating.
    for (let j = 0; j < 5; j++) {
        if (j < ratingArray[i]) {
            stars += "★";
        } else {
            stars += "☆";
        }
    }
    // Set the review rating element's text to display the generated stars.
    reviewRating.textContent = stars;
    // Set the review rating element's attribute to current rating from the array.
    reviewRating.setAttribute('data-rating', selected_rating);
    // Select the current review username element.
    let reviewUsername = reviewCards[i].querySelector(".review-username");
    // Set its text to the username from the array and add a space to separate it from the date.
    reviewUsername.firstChild.textContent = usernameArray[i] + " ";
    // Select the current review date element.
    let reviewDate = reviewCards[i].querySelector(".review-date");
    // Set its markup to the date from the array.
    reviewDate.innerHTML = dateArray[i];
    // Select the current review text element.
    let reviewText = reviewCards[i].querySelector(".review-text");
    // Set its text to the review text from the array.
    reviewText.textContent = reviewArray[i];
}

// Get the dropdown element for filtering ratings by its ID
var filterDropdown = document.getElementById('rating-filter');

// Add an event listener to the dropdown that triggers when the selected option changes
filterDropdown.addEventListener('change', function() {
    // Store the currently selected rating from the dropdown
    var selected_rating = filterDropdown.value;

    // Loop through each card:
    for (let i = 0; i < reviewCards.length; i++) {
        // Select the current review rating element.
        let reviewRating = reviewCards[i].querySelector(".review-rating");
        // Get the rating attribute value.
        let rating = reviewRating.getAttribute('data-rating');
        // Check if the selected rating is 'All' or matches the card's rating.
        if (selected_rating == 'All' || selected_rating == rating) {
            // If it matches, display the card.
            reviewCards[i].style.display = 'block';
        } else {
            // Otherwise, hide the card
            reviewCards[i].style.display = 'none';
        }
    }
});