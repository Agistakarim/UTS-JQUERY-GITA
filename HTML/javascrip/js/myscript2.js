let currentImageIndex = 0;

function showImage(index) {
    const mainImage = documen. getElementById("main");
    mainImage.src = document. querySelectorAll(".side_view img")[index].src;
    currentImageIndex = index;
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % 5; // Assuming 5 images
    showImage(currentImageIndex);
}

