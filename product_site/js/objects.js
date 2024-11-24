// Constructor function for Product
function Product(image, name, description, price, link) {
    // Initialize properties
    this.image = image;
    this.name = name;
    this.description = description;
    this.price = price;
    this.link = link;
}

// Create instances of Product
const creatine = new Product(
    "creatine.jpg",
    "CoreSeries Creatine Supplement",
    "Enhances energy and performance during workouts.",
    40.99,
    "https://www.amazon.com/CoreSeries-Creatine-Supplement-Servings-Unflavored/dp/B078JZQ5QL"
);

const protein = new Product(
    "protein.jpg",
    "Transparent Labs Grass-Fed Protein Isolate",
    "Supports muscle recovery and growth.",
    53.99,
    "https://www.amazon.com/Transparent-Labs-Grass-Fed-Protein-Isolate/dp/B0CQ32D39X"
);

const shaker = new Product(
    "shaker.jpg",
    "Shaker Bottle",
    "Perfect for mixing protein shakes.",
    18.29,
    "https://www.amazon.com/BlenderBottle-Classic-Shaker-Bottle-28-Ounce/dp/B06XCT7G2X?th=1"
);

// Array of products
const products = [creatine, protein, shaker];

// Function to render products
function renderProducts(products) {
    const productContainer = document.getElementById("product-container");

    products.forEach((product) => {
        const card = document.createElement("div");
        card.classList.add("product-card");
        card.innerHTML = `
            <img src="images/${product.image}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <a href="${product.link}" target="_blank">Buy Now</a>
        `;
        productContainer.appendChild(card);
    });
}

// Render products on page load
renderProducts(products);