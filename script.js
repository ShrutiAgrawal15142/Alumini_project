const images = document.querySelectorAll(".carousel img");
const carouselImages = document.querySelector(".carousel-images");
const quoteText = document.querySelector(".quote-text");

// Array of quotes
const quotes = [
    "Once a JNU student, always a JNU family member.",
    "The greatest gift you can give to your alma mater is to stay connected.",
    "Together we are stronger; together we can achieve more.",
    "Education is not the end; it's the beginning of your journey.",
    "Alumni: the bridge between the past and the future.",
    "Once you have experienced the magic of JNU, you will always carry it in your heart.",
    "Your story continues here; your legacy is our future.",
    "Connection is the key to growth—let’s stay connected!",
    "In the journey of life, we are all connected by the threads of our experiences.",
    "Our greatest resource is our alumni; let’s nurture that connection."
];

let quoteIndex = 0; // Start with the first quote

function updateQuote() {
    quoteText.style.transform = 'translateY(-100%)'; // Move out of view
    setTimeout(() => {
        quoteText.innerText = quotes[quoteIndex]; // Update quote
        quoteText.style.transform = 'translateY(0)'; // Move back into view
    }, 1000); // Delay before showing new quote

    quoteIndex = (quoteIndex + 1) % quotes.length; // Cycle through quotes
}

// Set interval to update quotes every 4 seconds
setInterval(updateQuote, 4000);
updateQuote(); // Initial call to display the first quote

const imageWidth = images[0].offsetWidth + 20; // Width + margin
let currentIndex = 1; // Start with the first actual image in the center

function updateCarousel() {
    // Remove 'center' class from all images
    images.forEach((img) => img.classList.remove("center"));

    // Add 'center' class to the current center image
    images[currentIndex].classList.add("center");

    // Update transform to center the current image
    carouselImages.style.transform = `translateX(-${(currentIndex - 1) * imageWidth}px)`;

    // Move to the next image, wrapping around when reaching the end
    currentIndex++;

    // Check if we've reached the duplicated images at the end
    if (currentIndex === images.length - 2) {
        setTimeout(() => {
            // Temporarily disable transition for instant rewind
            carouselImages.style.transition = "none";
            currentIndex = 1; // Reset to the first real image
            carouselImages.style.transform = `translateX(-${(currentIndex - 1) * imageWidth}px)`;
            setTimeout(() => {
                // Re-enable transition for smooth scrolling
                carouselImages.style.transition = "transform 1s ease";
            }, 50);
        }, 1000); // Delay at end for smooth viewing
    }
}

// Set interval to move images every 3 seconds
setInterval(updateCarousel, 3000);
