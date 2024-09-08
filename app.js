console.log ("Hello");

console.dir(document);

 // Select all main images and thumbnail images
const mainImages = document.querySelectorAll(".image-container .item");
const thumbnails = document.querySelectorAll(".thumbnail-container .item1 img");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
  
console.log("Previous button:", prevButton); 
console.log("Next button:", nextButton); 
// Lets keep track of the current image index
    let currentIndex = 0; 
    console.log("Initial currentIndex:", currentIndex);

// Function to updateMainImage display
function updateMainImage(index) {
    console.log("Updating main image to index:", index);
      
    mainImages.forEach((img) => img.style.display = "none"); // Hide all main images
      
      mainImages[index].style.display = "block"; // Show only the currently active image
}
  
// addEventlisteners for the changing buttons
prevButton.addEventListener("click", () => {
    currentIndex = currentIndex - 1; // Decrease the index by 1
    console.log("Previous button clicked. New currentIndex:", currentIndex);

    if (currentIndex < 0) { // Check if the index is less than 0
    currentIndex = mainImages.length - 1; // If it is, reset it to the last image index
    }
    // Update the main image display
    updateMainImage(currentIndex);
});

  
// Add event listener for the "Next" button
nextButton.addEventListener("click", () => {
    currentIndex = currentIndex + 1; // Increase the index by 1
    if (currentIndex >= mainImages.length) {  // Check if the index goes beyond the last image
        
        currentIndex = 0; // If it does, reset to first image index
    }
    // Update the main image display
    updateMainImage(currentIndex);
});
// Add click event listener for each thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        currentIndex = index; // Set the current index to the index of the clicked thumbnail

console.log("Thumbnail clicked. New currentIndex:", currentIndex);
// Update the main image display
updateMainImage(currentIndex);
    });
});

    // Initialize gallery by displaying the first image
updateMainImage(currentIndex);
console.log("Gallery initialized. Displaying image at index:", currentIndex);
  